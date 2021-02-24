import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  SIZE_XX_SMALL,
  SIZE_MEDIUM,
  SIZE_XX_LARGE,
  WHITE,
  RED,
  FONT_FAMILY_SEMI_BOLD,
} from '../styles/styles';
import {DataContext} from '../provider';

const Sacola = () => {
  const navigation = useNavigation();
  const {itensCheckout} = useContext(DataContext);

  return (
    <TouchableOpacity
      style={styles.containerSacola}
      onPress={() => navigation.push('Checkout')}>
      <Image
        source={require('../assets/images/icone-sacola.png')}
        style={styles.imagem}
      />
      {itensCheckout.length > 0 && (
        <View style={styles.containerQuantidade}>
          <Text style={styles.textoQuantidade}>
            {itensCheckout.reduce((acc, atual) => acc + atual.quantidade, 0)}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: WHITE,
    padding: SIZE_MEDIUM,
    borderRadius: SIZE_XX_LARGE,
  },
  imagem: {
    height: SIZE_XX_LARGE,
    width: SIZE_XX_LARGE,
  },
  containerQuantidade: {
    backgroundColor: RED,
    borderRadius: 100,
    marginTop: -22,
    marginLeft: SIZE_XX_SMALL,
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: SIZE_XX_SMALL,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    color: WHITE,
  },
});

export default Sacola;
