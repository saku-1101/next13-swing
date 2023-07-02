import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/rootStore';
import { HYDRATE } from 'next-redux-wrapper';

export const pet = 'cat';

const PetSlice = createSlice({
  name: 'pet',
  initialState: pet,
  reducers: {
    updatePetState: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        state,
        ...action.payload,
      };
    },
  },
});

// setter : Sliceではこのようなsetterで自動的にactionを作成してくれる
export const { updatePetState } = PetSlice.actions;

export const selectPet = (state: RootState) => state;

export const PetReducer = PetSlice.reducer;
