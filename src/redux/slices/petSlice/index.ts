import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/rootStore';

export const initialState = 'cat';

const PetSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    updatePetState: (state, action: PayloadAction<string>) => (state = action.payload),
  },
});

// setter : Sliceではこのようなsetterで自動的にactionを作成してくれる
export const { updatePetState } = PetSlice.actions;

export const petSelectors = {
  selectPet: (state: RootState) => state.pet,
};

export const PetReducer = PetSlice.reducer;
