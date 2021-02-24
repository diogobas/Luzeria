import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Background} from './componentes/background';
import {DescricaoItem} from './componentes/descricaoItem';

export const DetalhesProduto = ({route}) => {
  const {imagem, titulo, estudio, itemDesc, itemName, preco, id} = route.params;

  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem
        imagem={imagem}
        titulo={titulo}
        estudio={estudio}
        itemDesc={itemDesc}
        itemName={itemName}
        preco={preco}
        id={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
