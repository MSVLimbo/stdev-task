import { useEffect } from 'react';

/**
 * shared hook to use some logic on component mount / un-mount / update
 */

// eslint-disable-next-line react-hooks/exhaustive-deps
const useUpdate = (effect: () => void, deps: any[]) => useEffect(effect, [...deps]);

export default useUpdate;
