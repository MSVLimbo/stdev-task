import useUpdate from './useUpdate';
const useImperativeDisableScroll = ({ element, disabled }) => {
  useUpdate(() => {
    if (!element) {
      return;
    }
    element.style.overflowY = disabled ? 'hidden' : 'scroll';
    // eslint-disable-next-line consistent-return
    return () => {
      element.style.overflowY = 'scroll';
    };
  }, [disabled]);
};

export default useImperativeDisableScroll;
