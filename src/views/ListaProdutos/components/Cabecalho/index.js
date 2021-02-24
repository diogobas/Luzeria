import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Sacola from '../../../../components/sacola';
import {
  COR_DE_FUNDO,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  SIZE_MEDIUM,
  SIZE_XX_LARGE,
  SIZE_X_LARGE,
} from '../../../../styles/styles';

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Lighteria</Text>
        <Sacola />
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
