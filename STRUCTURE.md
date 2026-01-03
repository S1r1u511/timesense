# TimeSense - Proposed File Structure

## Directory Structure

```
app/
  layout.tsx              # Root layout (already exists)
  page.tsx                # Main game page (single-page app)
  globals.css             # Global styles (already exists)

components/
  DurationSelector.tsx    # Preset duration buttons (30s/60s/120s)
  BreathingAnimation.tsx  # Animated breathing circle/visual
  GameControls.tsx        # Start/Stop button
  ResultDisplay.tsx       # Shows target, actual, and offset after stop

lib/
  timer.ts                # Timer logic (hidden timer, elapsed time calculation)
  calculations.ts         # Offset calculation (actual - target)

types/
  index.ts                # Shared TypeScript types (GameState, Duration, etc.)
```

## Component Responsibilities

### `app/page.tsx`
- Main game container
- Manages game state (idle → running → finished)
- Coordinates between components
- Handles timer start/stop logic

### `components/DurationSelector.tsx`
- Renders 3 preset buttons: 30s, 60s, 120s
- Disabled during active game
- Emits selected duration to parent

### `components/BreathingAnimation.tsx`
- Visual breathing circle (expand/contract animation)
- Only visible when game is running
- CSS animation loop (no timer dependency)

### `components/GameControls.tsx`
- Start button (shown when idle)
- Stop button (shown when running)
- Handles click events, delegates to parent

### `components/ResultDisplay.tsx`
- Shows after game ends
- Displays: target duration, actual elapsed time, offset (±X seconds)
- "Try Again" button to reset state

### `lib/timer.ts`
- `startTimer()` - records start timestamp
- `getElapsedTime()` - calculates elapsed seconds
- Pure functions, no React hooks

### `lib/calculations.ts`
- `calculateOffset(actual, target)` - returns difference in seconds
- Formatting helpers if needed

### `types/index.ts`
- `type Duration = 30 | 60 | 120`
- `type GameState = 'idle' | 'running' | 'finished'`
- `interface GameResult { target: number; actual: number; offset: number }`

## Design Principles

1. **Single Page**: All game flow on one page, no routing needed
2. **State Lifting**: Game state managed at page level, passed down
3. **Separation of Concerns**: Timer logic separate from UI, calculations separate from display
4. **Minimal Dependencies**: No external animation libraries, use CSS animations
5. **Type Safety**: Shared types prevent prop mismatches

## State Flow

```
idle → [select duration] → [click start] → running → [click stop] → finished → [try again] → idle
```

## Notes

- No need for context providers (state is simple enough for props)
- No need for custom hooks initially (can extract later if needed)
- Breathing animation uses CSS keyframes, not JavaScript timers
- Timer uses `Date.now()` or `performance.now()` for precision
- All components are client components (use 'use client' directive)

