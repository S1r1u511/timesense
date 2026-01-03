export type Duration = 30 | 60 | 120;

export type GameState = 'idle' | 'running' | 'finished';

export interface GameResult {
  target: number;
  actual: number;
  offset: number;
}

