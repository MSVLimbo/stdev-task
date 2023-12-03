import type { GeneralState } from './slices/generalSlice/types';
import { PopupState } from './slices/popupSlice/types';

type Store = {
  general: GeneralState;
  home: any;
  popups: PopupState;
};

export default Store;
