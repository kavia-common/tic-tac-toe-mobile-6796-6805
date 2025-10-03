import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import type { Cell as CellType } from '../logic/game';

interface CellProps {
  value: CellType;
  onPress: () => void;
  disabled: boolean;
}

const Cell: React.FC<CellProps> = ({ value, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={styles.cell}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={`Cell ${value || 'empty'}`}
      accessibilityRole="button"
    >
      <Text style={styles.cellText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cellText: {
    fontSize: 60,
    color: '#333',
  },
});

export default Cell;
