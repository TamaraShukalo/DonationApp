import React, {useCallback} from 'react';
import {Category} from '../../data/categories';
import {FlatList, View} from 'react-native';
import {useAppSelector} from '../../redux/hooks';
import {styles} from './styles';
import {Title} from '../Title/Title';
import {CategoryTab} from '../CategoryTab/CategoryTab';

export const CategoriesList = () => {
  const categories = useAppSelector(state => state.categories);

  const renderItem = useCallback(
    ({item}: {item: Category}) => {
      return (
        <CategoryTab
          item={item}
          isInactive={item.categoryId !== categories.selectedCategoryId}
        />
      );
    },
    [categories.selectedCategoryId],
  );

  return (
    <View style={styles.container}>
      <Title title={'Select Category'} type={2} />

      <FlatList
        data={categories.categories}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        maxToRenderPerBatch={3}
      />
    </View>
  );
};
