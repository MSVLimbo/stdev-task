/* eslint-disable no-return-await */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

/**
 * shared async hook to use some logic on component mount / un-mount
 */

const useAsyncMount = <P>(effect: () => Promise<P>) =>
  useEffect(() => {
    (async () => await effect())();
  }, []);

export default useAsyncMount;
