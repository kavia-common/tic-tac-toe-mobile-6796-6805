import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';
import type { Board as BoardType } from '../logic/game';

interface BoardProps {
  board: BoardType;
  onCellPress: (index: number) => void;
  disabled: boolean;
}

const Board: React.FC<BoardProps> = ({ board, onCellPress, disabled }) => {
  return (
    <View style={styles.board}>
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onPress={() => onCellPress(index)}
          disabled={disabled || cell !== null}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    backgroundColor: '#f0f0f0',
  },
});

export default Board;
