import { useCallback, useEffect, useMemo, useState } from "react";
import PasswordGate from "@/features/ideation/components/PasswordGate";
import StepHeader from "@/features/ideation/components/StepHeader";
import { catalog } from "@/features/ideation/catalog";
import CategoryStep from "@/features/ideation/components/CategoryStep";
import type { Category } from "@/features/ideation/types";
import DesignInspirationStep from "@/features/ideation/components/DesignInspirationStep";
import ReviewStep from "@/features/ideation/components/ReviewStep";
import { buildItemsPayload, bulkItems, upsertBoard } from "@/features/ideation/api";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import IntroModal from "@/features/ideation/components/IntroModal";
import ProgressIndicator from "@/features/ideation/components/ProgressIndicator";

export default function IdeationLab() {
  const { toast } = useToast();
  const [authed, setAuthed] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const handleAuthed = useCallback(() => setAuthed(true), []);

  // All hooks must be called before any conditional returns
  const categories: Category[] = useMemo(
    () => [
      "Navigation Menu",
      "Hero",
      "Buttons",
      "Carousel",
      "Text Animations",
      "Color Palettes",
      "Typography",
    ],
    []
  );
  const steps = useMemo(() => ["Design Inspiration", ...categories] as const, [categories]);
  const [stepIndex, setStepIndex] = useState(0);
  const [boardId, setBoardId] = useState<string>("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let id = params.get("boardId") || "";
    if (!id) {
      id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      params.set("boardId", id);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, "", newUrl);
    }
    setBoardId(id);
  }, []);
  const currentStep = steps[stepIndex];
  const isDesignStep = currentStep === "Design Inspiration";
  const g = isDesignStep ? undefined : catalog.guidance.find((x) => x.category === currentStep);
  const itemsForCategory = useMemo(
    () => (isDesignStep ? [] : catalog.items.filter((i) => i.category === (currentStep as Category))),
    [isDesignStep, currentStep]
  );

  const [selectedByCategory, setSelectedByCategory] = useState<Record<string, string[]>>({});
  const [skipByCategory, setSkipByCategory] = useState<Record<string, boolean>>({});
  const [inspirationNotes, setInspirationNotes] = useState<Record<string, string>>({});
  const [restoredDraft, setRestoredDraft] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{ state: "idle" | "saving" | "saved"; timestamp?: string }>({ state: "idle" });
  const selectedIds = selectedByCategory[currentStep] || [];
  const skip = !!skipByCategory[currentStep];

  const toggleSelect = (id: string) => {
    setSelectedByCategory((prev) => {
      const existing = prev[currentStep] || [];
      const next = existing.includes(id) ? existing.filter((x) => x !== id) : [...existing, id];
      return { ...prev, [currentStep]: next };
    });
  };

  const onSkipChange = (v: boolean) => {
    setSkipByCategory((prev) => ({ ...prev, [currentStep]: v }));
  };

  const onBack = () => setStepIndex((i) => Math.max(0, i - 1));
  const onNext = () =>
    setStepIndex((i) => {
      const next = Math.min(steps.length, i + 1);
      if (next === steps.length) trackEvent("Wizard Completed", { boardId });
      return next;
    });


  // Auto-save to localStorage immediately when selections change
  useEffect(() => {
    if (!authed || !restoredDraft) return;
    setSaveStatus({ state: "saving" });
    const state = {
      selectedByCategory,
      skipByCategory,
      inspirationNotes,
      stepIndex,
      boardId,
      lastSaved: new Date().toISOString(),
    };
    localStorage.setItem("ideation_draft", JSON.stringify(state));
    setSaveStatus({ state: "saved", timestamp: state.lastSaved });
  }, [authed, restoredDraft, selectedByCategory, skipByCategory, inspirationNotes, stepIndex, boardId]);

  // Load from localStorage on mount
  useEffect(() => {
    if (!authed || restoredDraft) return;
    const draft = localStorage.getItem("ideation_draft");
    if (!draft) {
      setRestoredDraft(true);
      setSaveStatus({ state: "idle" });
      return;
    }

    try {
      const state = JSON.parse(draft);
      if (state.boardId) {
        setBoardId(state.boardId);
        const params = new URLSearchParams(window.location.search);
        if (params.get("boardId") !== state.boardId) {
          params.set("boardId", state.boardId);
          const newUrl = `${window.location.pathname}?${params.toString()}`;
          window.history.replaceState({}, "", newUrl);
        }
      }
      setSelectedByCategory(state.selectedByCategory || {});
      setSkipByCategory(state.skipByCategory || {});
      setStepIndex(state.stepIndex || 0);
      setInspirationNotes(state.inspirationNotes || {});
      setRestoredDraft(true);
      setSaveStatus({ state: "saved", timestamp: state.lastSaved || new Date().toISOString() });

      if (state.lastSaved) {
        toast({
          title: "Session restored",
          description: `Draft from ${new Date(state.lastSaved).toLocaleString()}`,
          className: "max-w-xs min-w-[220px] bg-neutral-900/90 border border-neutral-700 shadow-2xl shadow-black/40",
        });
      }
    } catch (e) {
      console.error("Failed to restore draft", e);
    }
  }, [authed, restoredDraft, toast]);

  // Check if first visit and show intro
  useEffect(() => {
    if (authed && !localStorage.getItem("ideation_intro_seen")) {
      setShowIntro(true);
    }
  }, [authed]);

  const onSubmit = async () => {
    try {
      console.log("Starting submission...", { boardId });
      
      // Prepare comprehensive data for Google Sheets
      const submissionData = {
        boardId,
        timestamp: new Date().toISOString(),
        selectedByCategory,
        skipByCategory,
        inspirationNotes,
        url: window.location.href
      };

      console.log("Submission data:", submissionData);

      console.log("Calling upsertBoard...");
      const upsertResult = await upsertBoard(submissionData);
      console.log("Upsert result:", upsertResult);

      console.log("Calling bulkItems...");
      const payload = buildItemsPayload(boardId, selectedByCategory, {}, catalog.items);
      // Add skipByCategory to the payload
      const itemsPayloadWithFlexible = { 
        ...payload, 
        skipByCategory: JSON.stringify(skipByCategory) 
      };
      console.log("Items payload:", itemsPayloadWithFlexible);
      const bulkResult = await bulkItems(itemsPayloadWithFlexible);
      console.log("Bulk items result:", bulkResult);

      trackEvent("Submitted Board", { boardId });

      try {
        await navigator.clipboard.writeText(window.location.href);
        trackEvent("Shared Link Copied", { boardId });

        toast({
          title: "✨ Selections submitted!",
          description: "Your shareable link has been copied to clipboard",
          duration: 5000,
        });
      } catch {
        toast({
          title: "✨ Selections submitted!",
          description: window.location.href,
          duration: 7000,
        });
      }

      // Clear draft after successful submit
      localStorage.removeItem("ideation_draft");
    } catch (e: any) {
      console.error("Submission error:", e);
      console.error("Error details:", {
        message: e.message,
        stack: e.stack,
        name: e.name
      });
      
      toast({
        title: "Submission failed",
        description: e.message || "Please try again or check your connection",
        variant: "destructive",
      });
    }
  };

  // Conditional render after all hooks
  if (!authed) {
    return <PasswordGate onAuthenticated={handleAuthed} />;
  }

  const totalStepCount = steps.length + 1; // includes Review step
  const completedStepsCount = Math.min(totalStepCount, stepIndex + 1);

  return (
    <>
      {showIntro && <IntroModal onClose={() => setShowIntro(false)} />}
      
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 min-h-screen">
        <section className="mb-8 rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm p-6">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4">Ideation Lab</h1>
          <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
            <p>
              Welcome! This space is all about capturing the website elements that speak to you. Each section features
              5-10 design elements. Browse through them, tap the cards you love, and jot down quick notes when something
              specific stands out.
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                <span>Select up to five favorites in each category, or choose “I’m flexible” and let us craft the solution.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                <span>Add optional notes on any card when you want to highlight something specific.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                <span>Your selections auto-save instantly, so you can pause anytime and come back right where you left off.</span>
              </li>
            </ul>
            <p className="text-sm text-neutral-400">
              Tip: when inspiration strikes, use the notes field on each card to highlight what caught your eye.
            </p>
          </div>
        </section>

        <ProgressIndicator
          currentStep={stepIndex + 1}
          totalSteps={totalStepCount}
          completedCategories={completedStepsCount}
          totalCategories={totalStepCount}
        />

        <div className="mt-8">
          <StepHeader
            stepIndex={stepIndex}
            totalSteps={totalStepCount}
            category={stepIndex === steps.length ? "Review" : currentStep}
            estTimeMins={stepIndex === steps.length ? undefined : g?.estTimeMins}
            guidance={
              stepIndex === steps.length
                ? undefined
                : isDesignStep
                ? "Browse these best-in-class websites with strong UX/UI foundations. Select the ones you like and optionally add notes to help us align future design directions with your preferences."
                : g?.guidance
            }
            onBack={stepIndex > 0 ? onBack : undefined}
            onNext={stepIndex < steps.length ? onNext : undefined}
            nextDisabled={
              stepIndex < steps.length && (
                isDesignStep
                  ? !skip && (selectedIds.length < 1 || selectedIds.length > 5)
                  : !skip && (selectedIds.length < 1 || selectedIds.length > 5)
              )
            }
            onFinishLater={stepIndex < steps.length ? () => {
              toast({
                title: "Progress saved",
                description: "Your selections are automatically saved. Come back anytime to continue!",
                className: "max-w-xs min-w-[220px] bg-neutral-900/90 border border-neutral-700 shadow-2xl shadow-black/40",
                duration: 4000,
              });
            } : undefined}
            autoSaveStatus={saveStatus}
          />

          <div className="rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm p-8">
            {stepIndex === steps.length ? (
              <ReviewStep
                selectedByCategory={selectedByCategory}
                onSubmit={onSubmit}
              />
            ) : isDesignStep ? (
              <DesignInspirationStep
                notes={inspirationNotes}
                onNoteChange={(id, value) =>
                  setInspirationNotes((prev) => ({ ...prev, [id]: value }))
                }
                selectedIds={selectedIds}
                onToggle={toggleSelect}
                skip={skip}
                onSkipChange={onSkipChange}
              />
            ) : (
              <CategoryStep
                category={currentStep as Category}
                items={itemsForCategory}
                selectedIds={selectedIds}
                onToggle={toggleSelect}
                skip={skip}
                onSkipChange={onSkipChange}
                min={1}
                max={5}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}


