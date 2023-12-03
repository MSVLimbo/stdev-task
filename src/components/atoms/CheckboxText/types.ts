import { BaseSyntheticEvent, ReactNode } from 'react';

interface ICheckboxTitle {
  children: ReactNode;
  checked?: boolean;
  onChange: (event: BaseSyntheticEvent) => void;
  tabIndex?: number;
  ariaLabel?: string;
  classname?:string;
}

export default ICheckboxTitle;
