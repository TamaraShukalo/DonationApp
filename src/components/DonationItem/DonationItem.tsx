import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {Badge} from '../Badge/Badge';
import {Title} from '../Title/Title';
import {styles} from './styles';
import {COLORS} from '../../constants/colors';

type Props = {
  uri: string;
  badgeTitle: string | undefined;
  donationTitle: string;
  price: number;
  onPress: (id: number) => void;
  donationItemId: number;
};

export const DonationItem = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
  onPress,
  donationItemId,
}: Props) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onPress(donationItemId);
      }}>
      <Badge title={badgeTitle} containerStyle={styles.badge} />

      <Image resizeMode={'cover'} source={{uri: uri}} style={styles.image} />

      <View style={styles.information}>
        <Title
          title={donationTitle}
          type={3}
          textColor={COLORS.navyBlue}
          numberOfLines={1}
        />
        <Title
          title={'$' + price.toFixed(2)}
          type={3}
          textColor={COLORS.blue}
        />
      </View>
    </Pressable>
  );
};
