import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type Props = {
  title: string;
  isDisabled?: boolean;
  onPress: () => void;
};

export const Button = ({title, isDisabled = false, onPress}: Props) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.button, isDisabled && styles.buttonDisabled]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
