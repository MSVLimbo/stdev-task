import { useEffect } from 'react';

/**
 * shared hook to use some logic on component mount / un-mount
 */

// eslint-disable-next-line react-hooks/exhaustive-deps
const useMount = (effect: () => void) => useEffect(effect, []);

export default useMount;
