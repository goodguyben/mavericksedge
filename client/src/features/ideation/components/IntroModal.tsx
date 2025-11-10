import { X } from "lucide-react";

type IntroModalProps = {
  onClose: () => void;
};

export default function IntroModal({ onClose }: IntroModalProps) {
  const handleGetStarted = () => {
    localStorage.setItem("ideation_intro_seen", "1");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6 border-b border-neutral-700 flex items-center justify-between sticky top-0 bg-neutral-900/95 backdrop-blur-sm">
          <div>
            <h2 className="text-2xl font-bold text-white">Welcome to the Ideation Lab</h2>
            <p className="text-sm text-neutral-400 mt-1">Let's get you started</p>
          </div>
          <button
            onClick={handleGetStarted}
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-xl p-5 border border-neutral-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">How it works</h3>
            <p className="text-neutral-300 leading-relaxed">
              We'll guide you through 5 design categories. Browse curated components, 
              select your favorites, and we'll bring your vision to life.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">The Process</h3>
            
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Browse & Select</h4>
                  <p className="text-sm text-neutral-400">
                    Explore 5–10 design elements in each category. Tap up to five favorites or mark the category as “I’m flexible.”
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Review & Refine</h4>
                  <p className="text-sm text-neutral-400">
                    See your picks summarized at the end, double-check any notes, and confirm you’re happy with each category.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Submit & Share</h4>
                  <p className="text-sm text-neutral-400">
                    Get a shareable link to collaborate with your team or discuss with us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/30 rounded-lg p-4 border border-neutral-700/50">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm font-medium text-neutral-300">Auto-save enabled</p>
                <p className="text-xs text-neutral-500 mt-1">
                  Your progress saves instantly after each choice, so you can pause anytime and pick up right where you left off.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Estimated time: ~12 minutes</span>
          </div>
        </div>

        <div className="p-6 border-t border-neutral-700 flex items-center justify-between bg-neutral-900/50">
          <button
            onClick={handleGetStarted}
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            Don't show this again
          </button>
          <button
            onClick={() => onClose()}
            className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-black hover:bg-neutral-100 transition-all shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

