import { ReactNode } from 'react';

interface ILink {
  children: ReactNode;
  href: string;
  title?: string;
  rel?: string;
  target?: string;
  download?: boolean;
  tabIndex?: number;
  ariaLabel?: string;
  className?: string;
  markAsActive?: boolean;
  onClick?: () => void;
  replace?: boolean;
  id?: string;
}

export default ILink;
