import React, {useState, useEffect, useCallback} from 'react';
import {Platform, StatusBar, Image} from 'react-native';
import {Asset} from 'expo-asset';
import {Block, GalioProvider} from 'galio-framework';
import {NavigationContainer} from '@react-navigation/native';
import * as SpalshScreen from "expo-splash-screen";
import {Images, products, materialTheme} from './constants';
import Screen from './navigation/Screens';
import {enableScreens} from 'react-native-screens';

enableScreens();

const assetImages = [
  Images.Pro,
  Images.Profile,
  Images.Avatar,
  Images.Onboarding,
];

products.map((product) => assetImages.push(product.image));

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare(){
      try{
        await _loadResourcesAsync();
      } catch(e){
        console.warn(e);
      } finally{
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const _loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  }

  const onLayoutRootView = useCallback(async () => {
    if(appIsReady){
      await SpalshScreen.hideAsync();
    }
  }, [appIsReady]);

  if(!appIsReady){
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <GalioProvider theme={materialTheme}>
        <Block flex onLayout={onLayoutRootView}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <Screen />
        </Block>
      </GalioProvider>
    </NavigationContainer>
  );
}