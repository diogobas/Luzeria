import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  FONT_FAMILY_SEMI_BOLD,
  SIZE_SMALL,
  WHITE,
} from '../../../../styles/styles';

export const Item = ({imagem, titulo}) => {
  return (
    <View style={styles.containerItem}>
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: WHITE,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  imagem: {
    height: 84,
  },
  texto: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: SIZE_SMALL,
    color: '#848486',
  },
});
