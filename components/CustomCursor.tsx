'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -300, y: -300 });
  const currentPos = useRef({ x: -300, y: -300 });
  const rafRef = useRef<number>(0);

  const [isView, setIsView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.classList.add('cursor-custom');

    const onMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const overWork =
        !!el.closest('.work-card') ||
        !!el.closest('.work-card-thumbnail');
      setIsView(overWork);
    };

    // Smooth-follow loop
    const tick = () => {
      const ease = 0.14;
      currentPos.current.x +=
        (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y +=
        (targetPos.current.y - currentPos.current.y) * ease;
      cursor.style.left = `${currentPos.current.x}px`;
      cursor.style.top = `${currentPos.current.y}px`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onOver);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onOver);
      document.body.classList.remove('cursor-custom');
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={[
        'custom-cursor',
        isView ? 'cursor-view' : 'cursor-dot',
        isVisible ? 'cursor-visible' : '',
      ].join(' ')}
      aria-hidden="true"
    >
      {isView && <span className="cursor-label">VIEW</span>}
    </div>
  );
}
