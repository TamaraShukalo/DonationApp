import React, {useState} from 'react';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

type Props = {
  label: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (value: any) => void;
  secureTextEntry?: boolean;
};

export const Input = ({
  label,
  placeholder,
  keyboardType,
  onChangeText,
  secureTextEntry,
}: Props) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={val => {
          setValue(val);
          onChangeText(val);
        }}
        placeholder={placeholder}
        keyboardType={keyboardType ? keyboardType : 'default'}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
