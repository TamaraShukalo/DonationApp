import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {useAppSelector} from '../../redux/hooks';
import {Button} from '../../components/Button/Button';
import {Title} from '../../components/Title/Title';
import {Badge} from '../../components/Badge/Badge';
import {BackButton} from '../../components/BackButton/BackButton';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './styles';
import {COLORS} from '../../constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

export const DonationItemScreen = () => {
  const donationInformation = useAppSelector(
    state => state.donations.selectedDonationInformation,
  );

  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const {params} =
    useRoute<RouteProp<MainStackParamList, 'DonationItemScreen'>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.informationContainer}
        showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => navigation.goBack()} />

        <Image
          source={{uri: donationInformation?.image}}
          style={styles.image}
        />

        <View style={styles.badge}>
          <Badge title={params.categoryInformation?.name} />

          <View style={styles.price}>
            <Title title={'Price: '} type={3} textColor={COLORS.navyBlue} />

            <Title
              title={'$' + donationInformation?.price}
              type={3}
              textColor={COLORS.blue}
            />
          </View>
        </View>

        <Title title={donationInformation?.name} type={1} />

        <Text style={styles.descriptionText}>
          {donationInformation?.description}
        </Text>
      </ScrollView>

      <View style={styles.button}>
        <Button
          title={'Donate'}
          onPress={() => navigation.navigate('Payment')}
        />
      </View>
    </SafeAreaView>
  );
};
