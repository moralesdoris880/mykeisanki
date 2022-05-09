import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
    subtract: (state, action) => {
      state.value -= action.payload;
    },
    multiply: (state, action) => {
      state.value *= action.payload;
    },
    divide: (state, action) => {
        state.value = state.value/action.payload;
    },
  },
});

export const { increment, decrement, multiply, divide } = calculatorSlice.actions;

export const selectCount = (state) => state.calculator.value;

export default calculatorSlice.reducer;
