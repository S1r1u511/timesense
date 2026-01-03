'use client';

import type { Duration } from '@/types';

interface DurationSelectorProps {
  selectedDuration: Duration | null;
  onSelect: (duration: Duration) => void;
  disabled: boolean;
}

export default function DurationSelector({
  selectedDuration,
  onSelect,
  disabled,
}: DurationSelectorProps) {
  const durations: Duration[] = [30, 60, 120];

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-medium">Select Duration</h2>
      <div className="flex gap-3">
        {durations.map((duration) => (
          <button
            key={duration}
            onClick={() => onSelect(duration)}
            disabled={disabled}
            className={`px-6 py-2 rounded border ${
              selectedDuration === duration
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {duration}s
          </button>
        ))}
      </div>
    </div>
  );
}

