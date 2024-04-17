import React, {memo} from 'react';
import {styles} from './styles';
import {Category} from '../../data/categories';
import {Pressable, Text} from 'react-native';
import {useAppDispatch} from '../../redux/hooks';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

type Props = {
  item: Category;
  isInactive: boolean;
};

export const CategoryTab = memo(
  ({item, isInactive = false}: Props) => {
    const dispatch = useAppDispatch();

    return (
      <Pressable
        style={[styles.tab, isInactive && styles.inactiveTab]}
        onPress={() => dispatch(updateSelectedCategoryId(item.categoryId))}>
        <Text style={[styles.text, isInactive && styles.inactiveText]}>
          {item.name}
        </Text>
      </Pressable>
    );
  },
  (oldProps, newProps) => oldProps.isInactive === newProps.isInactive,
);
