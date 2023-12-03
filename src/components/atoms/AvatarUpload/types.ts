import React from 'react';

interface IAvatarButton {
  firstName?: string;
  lastName?: string;
  imageSrc?: string;
  tabIndex?: number;
  ariaLabel?: string;
  avatar?: File;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default IAvatarButton;
