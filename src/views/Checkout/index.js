import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Botao} from '../../components/botao';
import {DataContext} from '../../provider';
import {
  FONT_FAMILY_SEMI_BOLD,
  SIZE_X_LARGE,
  SIZE_XX_LARGE,
  SIZE_LARGE,
  FONT_FAMILY_BOLD,
  SIZE_SMALL,
  COR_BOTAO_ACAO,
} from '../../styles/styles';
import {formataValor} from '../../utils/utils';
import {CheckoutItem} from './checkoutItem';

export const Checkout = () => {
  const navigation = useNavigation();
  const {itensCheckout} = useContext(DataContext);

  const valorTotal = itensCheckout.reduce(
    (acc, atual) => acc + atual.quantidade + atual.preco,
    0,
  );

  const Titulo = ({children}) => <Text style={styles.titulo}>{children}</Text>;
  const Total = ({children}) => <Text style={styles.total}>{children}</Text>;

  return (
    <View style={styles.container}>
      <Titulo>Checkout</Titulo>
      {itensCheckout.map((item) => (
        <CheckoutItem key={item.id} {...item} />
      ))}
      <Total>{formataValor(valorTotal)}</Total>
      <Botao titulo={'FINALIZAR COMPRA'} />
      <TouchableOpacity onPress={() => navigation.push('ListaProdutos')}>
        <Text style={styles.continuarTexto}>Continuar comprando</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZE_X_LARGE,
  },
  titulo: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: SIZE_XX_LARGE,
  },
  total: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: SIZE_LARGE,
    marginVertical: 36,
  },
  continuarTexto: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: SIZE_SMALL,
    color: COR_BOTAO_ACAO,
    textAlign: 'center',
  },
});
