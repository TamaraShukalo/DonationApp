import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Category, allCategories} from '../../data/categories';

interface State {
  categories: Category[];
  selectedCategoryId: number;
}

const initialState: State = {
  categories: allCategories,
  selectedCategoryId: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    updateSelectedCategoryId: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    },
    resetCategories: () => {
      return initialState;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} = Categories.actions;

export default Categories.reducer;
