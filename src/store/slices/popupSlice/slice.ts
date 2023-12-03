import { createSlice } from '@reduxjs/toolkit';

import type { PopupState, IPopupState } from './types';
import { PopupType } from './types';

// import IConfirmPopup from '../../../components/organisms/ConfirmPopup/types';

const initialState: PopupState = {

  info: {
    type: PopupType.INFO_POPUP,
    text: '',
    isOpen: false,
  },

  // confirm: {
  //   type: PopupType.CONFIRM_POPUP,
  //   agreement: { name: '', text: '', title: '', agreeText: '', disagreeText: '' },
  //   isOpen: false,
  // },
};

const popupSlice = createSlice({
  name: 'popups',
  initialState,
  reducers: {
    setActivePopup(state: PopupState, action: { payload: PopupType }): void {
      Object.entries(state).forEach(([_, popupState]: [string, IPopupState]) => {
        popupState.isOpen = popupState.type === action.payload && !popupState.isOpen;
      });
    },
    setInfoPopup(state: PopupState, action: { payload: string }, isOpen = true): void {
      state.info.text = action.payload;
      if (isOpen) {
        state.info.isOpen = !state.info.isOpen;
      }
    },
    // setConfirmPopup(state: PopupState, action: { payload: IConfirmPopup }, isOpen = true): void {
    //   state.confirm.agreement = action.payload;
    //   if (isOpen) {
    //     state.confirm.isOpen = !state.confirm.isOpen;
    //   }
    // },
  },
  extraReducers: builder =>
    builder

});

export const {
  setActivePopup,
  setInfoPopup,
  // setConfirmPopup,
} = popupSlice.actions;

export default popupSlice.reducer;
