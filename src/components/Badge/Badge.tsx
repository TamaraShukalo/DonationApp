import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {styles} from './styles';

type Props = {
  title: string | undefined;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Badge = ({title, containerStyle}: Props) => {
  return (
    <View style={[styles.badge, containerStyle]}>
      <Text numberOfLines={1} style={styles.text}>
        {title}
      </Text>
    </View>
  );
};
