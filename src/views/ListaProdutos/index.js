import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {DATA} from '../../utils/data';
import {Item} from './components/Produto';
import Cabecalho from './components/Cabecalho';
import {SIZE_X_LARGE} from '../../styles/styles';

const ListaProdutos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Cabecalho />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZE_X_LARGE,
  },
});

export default ListaProdutos;
