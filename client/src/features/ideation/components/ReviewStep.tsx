import { Category } from "../types";

type ReviewStepProps = {
  selectedByCategory: Record<string, string[]>;
  onSubmit: () => void;
};

export default function ReviewStep({
  selectedByCategory,
  onSubmit,
}: ReviewStepProps) {
  const categories: Category[] = [
    "Navigation Menu",
    "Hero",
    "Buttons",
    "Carousel",
    "Text Animations",
    "Color Palettes",
    "Typography",
  ];

  const totalSelections = categories.reduce((sum, cat) => {
    return sum + (selectedByCategory[cat]?.length || 0);
  }, 0);

  const selectedCategories = categories.filter(cat => selectedByCategory[cat]?.length > 0).length;

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] space-y-8 text-center">
      <div className="max-w-2xl">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 border-2 border-green-500/20 mb-6">
            <svg className="w-20 h-20 text-green-400" viewBox="0 0 64 64" fill="none">
              <circle
                className="animate-[dash_0.6s_ease-out_forwards]"
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="175"
                strokeDashoffset="175"
              />
              <path
                className="animate-[check_0.4s_0.45s_ease-out_both]"
                d="M20 33.5L28.5 42L44 24"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="40"
                strokeDashoffset="40"
              />
              <style>{`
                @keyframes dash {
                  to { stroke-dashoffset: 0; }
                }
                @keyframes check {
                  to { stroke-dashoffset: 0; }
                }
              `}</style>
            </svg>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">All Done!</h2>
          <p className="text-xl text-neutral-300 mb-6">
            You've successfully completed your component selections
          </p>

          <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">{totalSelections}</div>
                <div className="text-sm text-neutral-400">Components Selected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{selectedCategories}</div>
                <div className="text-sm text-neutral-400">Categories Completed</div>
              </div>
            </div>
          </div>

          <p className="text-neutral-400 mb-8">
            Your preferences have been saved. Click submit when you're ready to generate your shareable link.
          </p>
        </div>

        <button
          onClick={onSubmit}
          className="inline-flex items-center gap-3 rounded-xl bg-white px-10 py-4 text-lg font-semibold text-black hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span>Submit Selections</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
}


