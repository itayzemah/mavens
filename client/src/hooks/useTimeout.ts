import { useEffect } from 'react';

export function useTimeout({ delay, callback }: { delay: number; callback: () => void }) {
  useEffect(() => {
    const id = setTimeout(callback, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay, callback]);
}
