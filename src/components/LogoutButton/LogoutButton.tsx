import React from 'react';
import {Pressable} from 'react-native';
import {resetToInitialState} from '../../redux/reducers/User';
import {logOut} from '../../api/user';
import {COLORS} from '../../constants/colors';
import {useAppDispatch} from '../../redux/hooks';
import {styles} from './styles';
import {Title} from '../Title/Title';

export const LogoutButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Pressable
      onPress={async () => {
        dispatch(resetToInitialState());
        await logOut();
      }}
      style={styles.button}>
      <Title textColor={COLORS.blue} type={3} title={'Log Out'} />
    </Pressable>
  );
};
