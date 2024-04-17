import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text} from 'react-native';
import {Input} from '../../components/Input/Input';
import {Title} from '../../components/Title/Title';
import {Button} from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {loginUser} from '../../api/user';
import {useAppDispatch} from '../../redux/hooks';
import {logIn, resetToInitialState} from '../../redux/reducers/User';
import {COLORS} from '../../constants/colors';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '../../navigation/AuthNavigation';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetToInitialState());
  }, [dispatch]);

  const handleLogin = async () => {
    let user = await loginUser(email, password);

    if (!user.status) {
      setError(user.error || 'An unknown error occurred');
    } else {
      setError('');
      dispatch(logIn(user.data));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.inputs}
        showsVerticalScrollIndicator={false}>
        <Title type={1} title={'Welcome Back'} />

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

        <Button
          title={'Login'}
          onPress={handleLogin}
          isDisabled={email.length < 5 || password.length < 8}
        />

        <Pressable
          style={styles.registrationButton}
          onPress={() => navigation.navigate('Registration')}>
          <Title
            textColor={COLORS.blue}
            type={3}
            title={"Don't have an account?"}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
