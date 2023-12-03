import { BaseSyntheticEvent, ReactNode } from 'react';

interface IPopup {
  head?: ReactNode;
  body?: ReactNode;
  foot?: ReactNode;
  tabIndex?: number;
  ariaLabel?: string;
  onClose?: () => void;
  handleSubmit?: (event: BaseSyntheticEvent) => void;
  className?: string;
}

export default IPopup;
