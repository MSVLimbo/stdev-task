import {createSelector, createSlice} from '@reduxjs/toolkit';
import {
    getPostList,
    getUserInfo,
    signIn,
    signOut,
} from '../../actions/generalActions';

import initialState from './initialState';
import {RootState} from "../../index.ts";
import {removeTokenData} from '../../../utils/token';

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setProfileLoading(state, action) {
            state.loading = action.payload;
        },
        setProfileData(state, action) {
            state.profile = action.payload || initialState.profile;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getUserInfo.pending, state => {
                if (!state.profile) {
                    state.loading = true;
                }
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload;
            })
            .addCase(getUserInfo.rejected, state => {
                state.loading = false;
                state.profile = initialState.profile;
                removeTokenData();
            })
            .addCase(signIn.pending, state => {
                state.loading = true;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.profile = action.payload;
                state.loading = false;
            })
            .addCase(signIn.rejected, state => {
                state.profile = initialState.profile;
                state.loading = false;
            })
            .addCase(signOut.fulfilled, state => {
                removeTokenData();
                state.profile = initialState.profile;
                window.location.replace('/');
            })
            .addCase(getPostList.fulfilled, (state, action) => {
                state.postList = action.payload
            })
    },
});

export const {
    setProfileLoading,
    setProfileData,
} = generalSlice.actions;
export const getGeneralState = createSelector(
    (state: RootState) => state,
    ({general}) => general,
);
export default generalSlice.reducer;
