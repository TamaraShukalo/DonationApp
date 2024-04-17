import React from 'react';
import {View} from 'react-native';
import {BackButton} from '../../components/BackButton/BackButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {Title} from '../../components/Title/Title';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Payment = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.informationContainer}>
        <BackButton onPress={() => navigation.goBack()} />
        <Title title={'My card information'} type={1} />
      </View>
    </SafeAreaView>
  );
};
