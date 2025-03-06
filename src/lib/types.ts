export interface Achievement {
  id: string;
  name: string;
  description: string;
  points: number;
  icon: string;
  unlocked: boolean;
}

export interface UserProgress {
  level: number;
  points: number;
  achievements: Achievement[];
}

export interface LeaderboardEntry {
  username: string;
  points: number;
  level: number;
}

export interface MemoryCard {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface MoodEntry {
  mood: 'great' | 'good' | 'okay' | 'bad' | 'awful';
  timestamp: Date;
  note: string;
}