import React, {useCallback} from 'react';
import {DonationItems} from '../../data/items';
import {FlatList, Text} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {DonationItem} from '../DonationItem/DonationItem';
import {selectFilteredDonations} from '../../redux/selectors/filteredDonations';

export const DonationsList = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(state => state.categories);
  const donations = useAppSelector(selectFilteredDonations);

  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const renderDonationItem = useCallback(
    ({item}: {item: DonationItems}) => {
      const categoryInformation = categories.categories.find(
        category => category.categoryId === categories.selectedCategoryId,
      );

      return (
        <DonationItem
          uri={item.image}
          badgeTitle={categoryInformation?.name}
          donationTitle={item.name}
          donationItemId={item.donationItemId}
          price={parseFloat(item.price)}
          onPress={selectedDonationId => {
            dispatch(updateSelectedDonationId(selectedDonationId));
            navigation.navigate('DonationItemScreen', {
              categoryInformation,
            });
          }}
        />
      );
    },
    [
      categories.categories,
      categories.selectedCategoryId,
      dispatch,
      navigation,
    ],
  );

  const handleEmptyList = useCallback(() => {
    return <Text style={styles.text}>No results found.</Text>;
  }, []);

  return (
    <FlatList
      data={donations}
      renderItem={renderDonationItem}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      keyExtractor={item => item.donationItemId.toString()}
      scrollEnabled={false}
      style={styles.container}
      columnWrapperStyle={styles.column}
      ListEmptyComponent={handleEmptyList}
    />
  );
};
