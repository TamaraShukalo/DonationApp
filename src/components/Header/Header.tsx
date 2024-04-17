import React from 'react';
import {LogoutButton} from '../LogoutButton/LogoutButton';
import {Image, Text, View} from 'react-native';
import {Title} from '../Title/Title';
import {useAppSelector} from '../../redux/hooks';
import {styles} from './styles';

export const Header = () => {
  const user = useAppSelector(state => state.user);

  return (
    <>
      <LogoutButton />

      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Hello,</Text>
          <Title title={user.displayName + ' 👋'} type={1} />
        </View>

        <Image
          source={{uri: user.profileImage}}
          style={styles.profileImage}
          resizeMode={'contain'}
        />
      </View>
    </>
  );
};
