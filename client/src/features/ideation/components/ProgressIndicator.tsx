type ProgressIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  completedCategories: number;
  totalCategories: number;
};

export default function ProgressIndicator({
  currentStep,
  totalSteps,
  completedCategories,
  totalCategories,
}: ProgressIndicatorProps) {
  const percentage = (currentStep / totalSteps) * 100;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center gap-6 bg-neutral-800/30 rounded-xl p-4 border border-neutral-700/50">
      {/* Circular progress */}
      <div className="relative flex-shrink-0">
        <svg className="w-24 h-24 -rotate-90">
          {/* Background circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-neutral-700"
          />
          {/* Progress circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-white transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{Math.round(percentage)}%</span>
          <span className="text-xs text-neutral-400">Complete</span>
        </div>
      </div>

      {/* Progress details */}
      <div className="flex-1 space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium text-neutral-300">Overall Progress</span>
            <span className="text-xs text-neutral-500">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white to-neutral-300 transition-all duration-500 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-neutral-400">
              {completedCategories} of {totalCategories} steps
            </span>
          </div>
          <div className="flex items-center gap-1 text-neutral-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>~{Math.max(1, Math.round((totalSteps - currentStep) * 2))} min left</span>
          </div>
        </div>
      </div>
    </div>
  );
}

