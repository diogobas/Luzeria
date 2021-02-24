import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  COR_DE_FUNDO,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  SIZE_MEDIUM,
  SIZE_XX_LARGE,
  SIZE_X_LARGE,
  WHITE,
} from '../../../../styles/styles';

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Lighteria</Text>
        <View style={styles.containerSacola}>
          <Image
            source={require('../../../../assets/images/icone-sacola.png')}
            style={styles.imagem}
          />
        </View>
      </View>
      <View style={styles.containerDescricao}>
        <View style={styles.separador} />
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerDescricao: {
    paddingHorizontal: SIZE_X_LARGE,
  },
  containerSacola: {
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: SIZE_XX_LARGE,
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZE_MEDIUM,
    paddingHorizontal: 6,
  },
  imagem: {
    height: SIZE_XX_LARGE,
    width: SIZE_XX_LARGE,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
    margin: 10,
  },
  textoDescricao: {
    padding: SIZE_X_LARGE,
    backgroundColor: COR_DE_FUNDO,
    fontSize: SIZE_MEDIUM,
    fontFamily: FONT_FAMILY_REGULAR,
    color: '#A1A5AA',
  },
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: SIZE_XX_LARGE,
  },
});

export default Cabecalho;
