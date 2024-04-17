import React from 'react';
import {ColorValue, Text, TextStyle, View} from 'react-native';
import {styles} from './styles';

type Props = {
  title?: string;
  type: number;
  textColor?: ColorValue;
  numberOfLines?: number;
};

const textStyle: {[key: number]: TextStyle} = {
  1: styles.text1,
  2: styles.text2,
  3: styles.text3,
};

export const Title = ({title, type, textColor, numberOfLines}: Props) => {
  const styleToApply = textStyle[type] || styles.text1;

  return (
    <View>
      <Text
        style={[styleToApply, textColor ? {color: textColor} : null]}
        numberOfLines={numberOfLines}>
        {title}
      </Text>
    </View>
  );
};
