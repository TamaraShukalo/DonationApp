import React from 'react';
import {Image, Pressable, ScrollView, View} from 'react-native';
import {SearchInput} from '../../components/SearchInput/SearchInput';
import {CategoriesList} from '../../components/CategoriesList/CategoriesList';
import {Header} from '../../components/Header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {DonationsList} from '../../components/DonationsList/DonationsList';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <View style={styles.searchContainer}>
          <SearchInput />
        </View>

        <Pressable style={styles.pressableImageContainer}>
          <Image
            style={styles.pressableImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>

        <CategoriesList />

        <DonationsList />
      </ScrollView>
    </SafeAreaView>
  );
};
