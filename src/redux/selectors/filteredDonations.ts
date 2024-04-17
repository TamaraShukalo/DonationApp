import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const selectDonations = (state: RootState) => state.donations.donations;
export const selectSelectedCategoryId = (state: RootState) =>
  state.categories.selectedCategoryId;
export const selectSearchQuery = (state: RootState) =>
  state.donations.searchQuery;

export const selectFilteredDonations = createSelector(
  [selectDonations, selectSelectedCategoryId, selectSearchQuery],
  (donations, selectedCategoryId, searchQuery) => {
    const preparedQuery = searchQuery.trim().toLowerCase();
    const filteredDonations = donations.filter(
      item =>
        item.categoryIds.includes(selectedCategoryId) &&
        item.name.toLowerCase().includes(preparedQuery),
    );

    return filteredDonations;
  },
);
