import { ComponentType, Suspense } from 'react';

function withSuspense<P>(Component: ComponentType<P>, Fallback?: ComponentType<any>) {
  return (props: P) => (
    <Suspense fallback={Fallback ? <Fallback /> : ''}>
      <Component {...props} />
    </Suspense>
  );
}

export default withSuspense;
