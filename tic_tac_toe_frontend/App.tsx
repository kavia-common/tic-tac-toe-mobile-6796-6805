import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Board from './components/Board';
import { createInitialState, checkWinner, getAIMove, type GameState, type GameMode } from './logic/game';
import { loadScores, saveScores, loadGameMode, saveGameMode } from './storage';

export default function App(): React.JSX.Element {
  const [gameState, setGameState] = useState<GameState>(createInitialState());
  
  useEffect(() => {
    const initGame = async () => {
      const [scores, gameMode] = await Promise.all([
        loadScores(),
        loadGameMode(),
      ]);
      setGameState({
        ...createInitialState(gameMode),
        scores,
      });
    };
    initGame();
  }, []);

  const handleCellPress = useCallback((index: number) => {
    if (gameState.winner || gameState.board[index]) return;

    const newBoard = [...gameState.board];
    newBoard[index] = gameState.currentPlayer;
    
    const winner = checkWinner(newBoard);
    const newScores = { ...gameState.scores };
    
    if (winner) {
      if (winner === 'draw') {
        newScores.draws += 1;
      } else {
        newScores[winner] += 1;
      }
      saveScores(newScores);
    }

    setGameState({
      ...gameState,
      board: newBoard,
      currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
      winner,
      scores: newScores,
    });

    // AI move
    if (!winner && gameState.gameMode === 'single' && gameState.currentPlayer === 'X') {
      setTimeout(() => {
        const aiMove = getAIMove(newBoard);
        const aiBoard = [...newBoard];
        aiBoard[aiMove] = 'O';
        
        const aiWinner = checkWinner(aiBoard);
        const aiScores = { ...newScores };
        
        if (aiWinner) {
          if (aiWinner === 'draw') {
            aiScores.draws += 1;
          } else {
            aiScores[aiWinner] += 1;
          }
          saveScores(aiScores);
        }

        setGameState({
          ...gameState,
          board: aiBoard,
          currentPlayer: 'X',
          winner: aiWinner,
          scores: aiScores,
        });
      }, 500);
    }
  }, [gameState]);

  const handleNewGame = () => {
    setGameState(prevState => ({
      ...createInitialState(prevState.gameMode),
      scores: prevState.scores,
    }));
  };

  const handleResetScores = async () => {
    const newScores = { X: 0, O: 0, draws: 0 };
    await saveScores(newScores);
    setGameState(prevState => ({
      ...prevState,
      scores: newScores,
    }));
  };

  const handleGameModeChange = async (newMode: GameMode) => {
    await saveGameMode(newMode);
    setGameState(prevState => ({
      ...createInitialState(newMode),
      scores: prevState.scores,
    }));
  };

  const getGameStatus = () => {
    if (gameState.winner === 'draw') return 'Game Over - Draw!';
    if (gameState.winner) return `Game Over - ${gameState.winner} Wins!`;
    return `Current Player: ${gameState.currentPlayer}`;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.modeSwitch}>
          <Text>Two Player</Text>
          <Switch
            value={gameState.gameMode === 'single'}
            onValueChange={(value) => handleGameModeChange(value ? 'single' : 'two-player')}
          />
          <Text>Single Player</Text>
        </View>
      </View>

      <View style={styles.scoreBoard}>
        <Text style={styles.scoreText}>X: {gameState.scores.X}</Text>
        <Text style={styles.scoreText}>O: {gameState.scores.O}</Text>
        <Text style={styles.scoreText}>Draws: {gameState.scores.draws}</Text>
      </View>

      <Text style={styles.status}>{getGameStatus()}</Text>

      <Board
        board={gameState.board}
        onCellPress={handleCellPress}
        disabled={!!gameState.winner || (gameState.gameMode === 'single' && gameState.currentPlayer === 'O')}
      />

      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={handleNewGame}>
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleResetScores}>
          <Text style={styles.buttonText}>Reset Scores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modeSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  scoreBoard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: '600',
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
