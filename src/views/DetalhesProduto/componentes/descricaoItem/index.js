import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  SIZE_MEDIUM,
  SIZE_SMALL,
  SIZE_X_LARGE,
  WHITE,
  LIGHTGRAY,
  SIZE_LARGE,
  LIGHTERGRAY,
  BLACK,
  SIZE_X_SMALL,
} from '../../../../styles/styles';
import {Botao} from '../../../../components/botao';
import {formataValor} from '../../../../utils/utils';

export const DescricaoItem = ({
  imagem,
  titulo,
  estudio,
  itemDesc,
  itemName,
  preco,
  id,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.headerPosicao}>
            <View>
              <Text style={styles.textSuperior}>{estudio}</Text>
              <Text style={styles.textMedio}>{itemName}</Text>
              <Text style={styles.textInferior}>{titulo}</Text>
            </View>
            <Image source={imagem} style={styles.imagemItem} />
          </View>
          <Text style={styles.textoDescricao}>{itemDesc}</Text>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{formataValor(preco)}</Text>
            <Botao
              titulo={'COMPRAR'}
              onPress={() => navigation.push('Checkout')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60,
  },
  itemPosicao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  headerPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSuperior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: SIZE_MEDIUM,
    marginBottom: 4,
  },
  textMedio: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: SIZE_X_LARGE,
    marginBottom: 4,
  },
  textInferior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: SIZE_SMALL,
    color: LIGHTGRAY,
    marginBottom: SIZE_X_SMALL,
  },
  imagemItem: {
    width: 32,
    height: 72,
  },
  textoDescricao: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: SIZE_SMALL,
    color: LIGHTERGRAY,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZE_MEDIUM,
  },
  moeda: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: SIZE_LARGE,
    marginTop: 10,
    color: BLACK,
  },
});
