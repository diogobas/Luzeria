import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SIZE_XX_LARGE, WHITE} from '../styles/styles';

const Sacola = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerSacola}
      onPress={() => navigation.push('Checkout')}>
      <Image
        source={require('../assets/images/icone-sacola.png')}
        style={styles.imagem}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: SIZE_XX_LARGE,
  },
  imagem: {
    height: SIZE_XX_LARGE,
    width: SIZE_XX_LARGE,
  },
});

export default Sacola;
