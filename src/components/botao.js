import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  COR_BOTAO_ACAO,
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
    backgroundColor: COR_BOTAO_ACAO,
    padding: SIZE_LARGE,
    borderRadius: 6,
  },
  botaoTexto: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: SIZE_MEDIUM,
    color: WHITE,
  },
});
