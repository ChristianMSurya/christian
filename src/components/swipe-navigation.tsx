'use client';

import { useSwipeable } from 'react-swipeable';
import { useRouter, usePathname } from 'next/navigation';

const routes = ['/', '/work', '/writing'];

export default function SwipeNavigation({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const getCurrentIndex = () => routes.indexOf(pathname);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const currentIndex = getCurrentIndex();
      if (currentIndex < routes.length - 1) {
        router.push(routes[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      const currentIndex = getCurrentIndex();
      if (currentIndex > 0) {
        router.push(routes[currentIndex - 1]);
      }
    },
    trackMouse: false,
    delta: 50,
  });

  return (
    <div {...handlers}>
      {children}
    </div>
  );
}
