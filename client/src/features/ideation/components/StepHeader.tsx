type StepHeaderProps = {
  stepIndex: number;
  totalSteps: number;
  category: string;
  estTimeMins?: number;
  guidance?: string;
  onBack?: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
  onFinishLater?: () => void;
  autoSaveStatus?: {
    state: "idle" | "saving" | "saved";
    timestamp?: string;
  };
};

export default function StepHeader({
  stepIndex,
  totalSteps,
  category,
  estTimeMins,
  guidance,
  onBack,
  onNext,
  nextDisabled,
  onFinishLater,
  autoSaveStatus,
}: StepHeaderProps) {
  const renderSaveMessage = () => {
    if (!autoSaveStatus || autoSaveStatus.state === "idle") return null;
    if (autoSaveStatus.state === "saving") return "Saving…";
    const time = autoSaveStatus.timestamp
      ? new Date(autoSaveStatus.timestamp).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
      : "just now";
    return `Saved ${time}`;
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
              Step {stepIndex + 1} of {totalSteps}
            </div>
            {typeof estTimeMins === "number" && (
              <div className="text-xs text-neutral-500 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ~{estTimeMins} min
              </div>
            )}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">{category}</h2>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="rounded-lg border border-neutral-600 bg-neutral-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 transition-colors"
              >
                Back
              </button>
            )}
            {onFinishLater && (
              <button
                onClick={onFinishLater}
                className="rounded-lg border border-neutral-600 bg-neutral-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 transition-all"
              >
                Finish Later
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                disabled={nextDisabled}
                className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black enabled:hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Next Step
              </button>
            )}
          </div>
          {renderSaveMessage() && (
            <div className="flex items-center gap-2 rounded-full border border-neutral-700/70 bg-neutral-900/80 px-3 py-1 text-xs text-neutral-300 shadow-lg shadow-black/20">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="whitespace-nowrap">{renderSaveMessage()}</span>
            </div>
          )}
        </div>
      </div>
      {guidance && (
        <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg p-4">
          <p className="text-sm text-neutral-300 leading-relaxed">{guidance}</p>
        </div>
      )}
    </div>
  );
}


