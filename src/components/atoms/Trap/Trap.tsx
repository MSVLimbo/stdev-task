import FocusTrap from 'focus-trap-react';

import ITrap from './types';

function Trap({ children, onClose }: ITrap) {
  return (
    <FocusTrap
      focusTrapOptions={{
        onDeactivate: onClose,
        allowOutsideClick: true,
        returnFocusOnDeactivate: true,
        // clickOutsideDeactivates: true,
        escapeDeactivates: true,
      }}
    >
      <div>{children}</div>
    </FocusTrap>
  );
}

export default Trap;
