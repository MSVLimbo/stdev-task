import { createAsyncThunk } from '@reduxjs/toolkit';

const getAsyncData = createAsyncThunk('homepage/async', async () => {
  const promise = new Promise(resolve => setTimeout(() => resolve(1), 1000));

  // eslint-disable-next-line no-return-await
  return await promise;
});

export default getAsyncData;
