// import IConfirmPopup from '../../../components/organisms/IConfirmPopup/types';

export enum PopupType {
  INFO_POPUP = 'INFO_POPUP',
  CONFIRM_POPUP = 'CONFIRM_POPUP',
}

export interface IPopupState {
  isOpen: boolean;
  type: PopupType;
}

export interface IInfoPopupState {
  isOpen: boolean;
  type: PopupType.INFO_POPUP;
  text: any;
}

// export interface IConfirmPopupState {
//   isOpen: boolean;
//   type: PopupType.CONFIRM_POPUP;
//   agreement: IConfirmPopup;
// }

export interface PopupState {
  info: IInfoPopupState;
  // confirm: IConfirmPopupState;
}
