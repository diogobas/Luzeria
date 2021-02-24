import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
    paddingHorizontal: 24,
  },
  containerSacola: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 30,
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
    paddingVertical: 16,
    paddingHorizontal: 6,
  },
  imagem: {
    height: 30,
    width: 30,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
    margin: 10,
  },
  textoDescricao: {
    padding: 24,
    backgroundColor: '#F4F0F4',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#A1A5AA',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 28,
  },
});

export default Cabecalho;
