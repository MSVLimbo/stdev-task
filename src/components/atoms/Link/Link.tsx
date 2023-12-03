import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import ILink from './types';

function Link({
  children,
  href,
  title,
  rel,
  target,
  download,
  tabIndex = 0,
  ariaLabel,
  className,
  markAsActive,
  replace,
  onClick,
  id,
}: ILink) {
  return (
    <NavLink
      className={({ isActive }: any) =>
        classNames(className, {
          active: markAsActive && isActive,
        })
      }
      onClick={onClick}
      to={href}
      rel={rel}
      target={target}
      download={download}
      replace={replace}
      title={title}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      id={id}
    >
      {children}
    </NavLink>
  );
}

export default Link;
