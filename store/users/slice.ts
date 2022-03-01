import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from './types';

const initialState: CounterState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});