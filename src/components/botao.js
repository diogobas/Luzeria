import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  LIGHTBLUE,
  FONT_FAMILY_SEMI_BOLD,
  SIZE_MEDIUM,
  WHITE,
  SIZE_LARGE,
} from '../styles/styles';

export const Botao = ({titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoContainer: {
    backgroundColor: LIGHTBLUE,
    padding: SIZE_LARGE,
    borderRadius: 6,
  },
  texto: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: SIZE_MEDIUM,
    color: WHITE,
  },
});
