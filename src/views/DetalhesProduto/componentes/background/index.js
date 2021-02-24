import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {
  SIZE_MEDIUM,
  SIZE_X_LARGE,
  SIZE_XXX_LARGE,
} from '../../../../styles/styles';
import Sacola from '../../../../components/sacola';

export const Background = () => {
  const imgSrc = require('../../../../assets/images/bgimg.jpg');
  const navigation = useNavigation();

  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.imagemFundo}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../../../../assets/images/flecha-esquerda.png')}
            style={styles.imagemSeta}
          />
          <View style={styles.containerSacola}>
            <Sacola />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1.5,
  },
  imagemFundo: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagemSeta: {
    width: SIZE_X_LARGE,
    height: SIZE_X_LARGE,
    marginTop: SIZE_XXX_LARGE,
    marginLeft: SIZE_X_LARGE,
  },
  containerSacola: {
    padding: SIZE_MEDIUM,
  },
});
