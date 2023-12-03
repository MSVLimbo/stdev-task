import { useEffect, MouseEvent, RefObject } from 'react';

const useClickOutside = (ref: RefObject<HTMLElement>, callback?: (event?: any) => void) => {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (ref.current) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLTextAreaElement;
        if (
          (ref.current &&
            !ref.current.contains(event.target as HTMLElement) &&
            typeof callback === 'function') ||
          target.id === 'view-all-messages'
        ) {
          callback && callback(event);
        }
      };

      document.addEventListener('click', handleClickOutside as () => void);
      return () => {
        document.removeEventListener('click', handleClickOutside as () => void);
      };
    }
  }, [callback, ref]);
};

export default useClickOutside;
