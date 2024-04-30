import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useInViewHandler(onInView: () => void): (node?: Element | null | undefined) => void {
  const [ref, inView] = useInView({
    delay: 100,
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView]);

  return ref;
}
