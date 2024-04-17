import React from 'react';
import {useAppSelector} from '../redux/hooks';
import {MainNavigation} from './MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {AuthNavigation} from './AuthNavigation';

export const RootNavigation = () => {
  const user = useAppSelector(state => state.user);

  return user.isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};

export function Router() {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <RootNavigation />
    </NavigationContainer>
  );
}
