import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login/Login';
import {Registration} from '../screens/Registration/Registration';

export type AuthStackParamList = {
  Login: undefined;
  Registration: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'Login'} component={Login} />
      <AuthStack.Screen name={'Registration'} component={Registration} />
    </AuthStack.Navigator>
  );
};
