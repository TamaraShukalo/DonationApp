import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {DonationItems, items} from '../../data/items';

interface State {
  donations: DonationItems[];
  selectedDonationId: number | null;
  selectedDonationInformation: DonationItems | null;
  searchQuery: string;
}

const initialState: State = {
  donations: items,
  selectedDonationId: null,
  selectedDonationInformation: null,
  searchQuery: '',
};

const Donations = createSlice({
  name: 'donations',
  initialState: initialState,
  reducers: {
    updateSelectedDonationId: (state, action: PayloadAction<number>) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationInformation =
        state.donations.find(item => item.donationItemId === action.payload) ||
        null;
    },
    resetDonations: () => {
      return initialState;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {resetDonations, updateSelectedDonationId, setSearchQuery} =
  Donations.actions;

export default Donations.reducer;
