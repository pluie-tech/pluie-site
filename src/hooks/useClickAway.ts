import { useEffect } from 'react';

const listenedEvents = ['mousedown', 'touchstart'] as const;
export function useClickAway(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    for (const event of listenedEvents) {
      document.addEventListener(event, listener);
    }

    return () => {
      for (const event of listenedEvents) {
        document.removeEventListener(event, listener);
      }
    };
  }, [ref, handler]);
}