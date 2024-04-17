import React from 'react';
import {Pressable} from 'react-native';
import {ArrowLeft} from '../../assets/svg/ArrowLeft';
import {styles} from './styles';

type Props = {
  onPress: () => void;
};

export const BackButton = ({onPress}: Props) => {
  return (
    <Pressable onPress={() => onPress()} style={styles.container}>
      <ArrowLeft />
    </Pressable>
  );
};
