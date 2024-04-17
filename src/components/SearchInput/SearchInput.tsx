import React, {useCallback, useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {Search} from '../../assets/svg/Search';
import {debounce} from 'lodash';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {setSearchQuery} from '../../redux/reducers/Donations';

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const textInputRef = useRef<TextInput | null>(null);

  const handleFocus = () => {
    textInputRef.current?.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      dispatch(setSearchQuery(searchQuery));
    }, 1000),
    [dispatch],
  );

  const handleChange = useCallback(
    (text: string) => {
      setSearch(text);
      debouncedSearch(text);
    },
    [debouncedSearch],
  );

  return (
    <Pressable style={styles.container} onPress={handleFocus}>
      <Search />
      <TextInput
        placeholder={'Search'}
        ref={textInputRef}
        style={styles.input}
        value={search}
        onChangeText={handleChange}
      />
    </Pressable>
  );
};
