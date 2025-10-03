export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[];
export type GameMode = 'single' | 'two-player';

export interface GameState {
  board: Board;
  currentPlayer: Player;
  gameMode: GameMode;
  winner: Player | 'draw' | null;
  scores: {
    X: number;
    O: number;
    draws: number;
  };
}

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

export const createInitialState = (gameMode: GameMode = 'two-player'): GameState => ({
  board: Array(9).fill(null),
  currentPlayer: 'X',
  gameMode,
  winner: null,
  scores: { X: 0, O: 0, draws: 0 }
});

export const checkWinner = (board: Board): Player | 'draw' | null => {
  // Check for winner
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Player;
    }
  }
  
  // Check for draw
  if (board.every(cell => cell !== null)) {
    return 'draw';
  }
  
  // Game is still ongoing
  return null;
};

export const getAIMove = (board: Board): number => {
  // Simple AI: First try to win, then block opponent, then take center, then take first available
  
  const getWinningMove = (player: Player): number | null => {
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        const testBoard = [...board];
        testBoard[i] = player;
        if (checkWinner(testBoard) === player) {
          return i;
        }
      }
    }
    return null;
  };
  
  // Try to win
  const winningMove = getWinningMove('O');
  if (winningMove !== null) return winningMove;
  
  // Try to block X from winning
  const blockingMove = getWinningMove('X');
  if (blockingMove !== null) return blockingMove;
  
  // Take center if available
  if (!board[4]) return 4;
  
  // Take first available corner
  const corners = [0, 2, 6, 8];
  for (const corner of corners) {
    if (!board[corner]) return corner;
  }
  
  // Take first available side
  const sides = [1, 3, 5, 7];
  for (const side of sides) {
    if (!board[side]) return side;
  }
  
  // Should never reach here if board has empty cells
  return board.findIndex(cell => !cell);
};
