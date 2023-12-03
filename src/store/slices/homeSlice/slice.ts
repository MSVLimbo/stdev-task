import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: [1, 2, 3, 4, 5],
  },
  reducers: {},
});

export default homeSlice.reducer;
