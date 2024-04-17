import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {BackButton} from '../../components/BackButton/BackButton';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import {createUser} from '../../api/user';
import {styles} from './styles';
import {Title} from '../../components/Title/Title';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleRegister = async () => {
    let user = await createUser(fullName, email, password);

    if ('error' in user) {
      setError(user.error);
    } else {
      setError('');
      setSuccess('You have successfully registered');
      setTimeout(() => navigation.goBack(), 3000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <ScrollView
        contentContainerStyle={styles.inputs}
        showsVerticalScrollIndicator={false}>
        <Title type={1} title={'Hello and Welcome!'} />

        <Input
          label={'First & Last Name'}
          placeholder={'Enter your name'}
          onChangeText={value => setFullName(value)}
        />

        <Input
          label={'Email'}
          placeholder={'Enter your email'}
          keyboardType={'email-address'}
          onChangeText={value => setEmail(value)}
        />

        <Input
          secureTextEntry={true}
          label={'Password'}
          placeholder={'*******'}
          onChangeText={value => setPassword(value)}
        />
        {error.length > 0 && <Text style={styles.errorText}>{error}</Text>}
        {success.length > 0 && (
          <Text style={styles.successText}>{success}</Text>
        )}

        <Button
          isDisabled={
            fullName.length <= 2 || email.length < 5 || password.length < 8
          }
          title={'Register'}
          onPress={handleRegister}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
