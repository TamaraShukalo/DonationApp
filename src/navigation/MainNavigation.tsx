import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DonationItemScreen} from '../screens/DonationItemScreen/DonationItemScreen';
import {Payment} from '../screens/Payment/Payment';
import {Home} from '../screens/Home/Home';

export type MainStackParamList = {
  Home: undefined;
  DonationItemScreen: {
    categoryInformation: {categoryId: number; name: string} | undefined;
  };
  Payment: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen
        name={'DonationItemScreen'}
        component={DonationItemScreen}
      />
      <Stack.Screen name={'Payment'} component={Payment} />
    </Stack.Navigator>
  );
};
