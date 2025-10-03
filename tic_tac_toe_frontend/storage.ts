import AsyncStorage from '@react-native-async-storage/async-storage';
import type { GameMode } from './logic/game';

const STORAGE_KEYS = {
  SCORES: '@TicTacToe:scores',
  GAME_MODE: '@TicTacToe:gameMode',
};

export interface Scores {
  X: number;
  O: number;
  draws: number;
}

export const saveScores = async (scores: Scores): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.SCORES, JSON.stringify(scores));
  } catch (error) {
    console.error('Error saving scores:', error);
  }
};

export const loadScores = async (): Promise<Scores> => {
  try {
    const scores = await AsyncStorage.getItem(STORAGE_KEYS.SCORES);
    return scores ? JSON.parse(scores) : { X: 0, O: 0, draws: 0 };
  } catch (error) {
    console.error('Error loading scores:', error);
    return { X: 0, O: 0, draws: 0 };
  }
};

export const saveGameMode = async (mode: GameMode): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.GAME_MODE, mode);
  } catch (error) {
    console.error('Error saving game mode:', error);
  }
};

export const loadGameMode = async (): Promise<GameMode> => {
  try {
    const mode = await AsyncStorage.getItem(STORAGE_KEYS.GAME_MODE);
    return (mode as GameMode) || 'two-player';
  } catch (error) {
    console.error('Error loading game mode:', error);
    return 'two-player';
  }
};
