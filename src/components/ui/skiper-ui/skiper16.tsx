"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import React, { useRef } from "react";

// Adapted for PlugPakka: cards hold content instead of images, and Lenis smooth-scroll is dropped.

const StickyCard_001 = ({
  i,
  progress,
  range,
  targetScale,
  children,
}: {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  children: React.ReactNode;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-[85vh] items-center justify-center">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 26}px)` }}
        className="relative flex min-h-[300px] w-[min(92vw,720px)] origin-top flex-col overflow-hidden rounded-[2rem]"
      >
        {children}
      </motion.div>
    </div>
  );
};

const Skiper16 = ({ cards }: { cards: React.ReactNode[] }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative">
      {cards.map((card, i) => (
        <StickyCard_001
          key={i}
          i={i}
          progress={scrollYProgress}
          range={[i / cards.length, 1]}
          targetScale={1 - (cards.length - i - 1) * 0.06}
        >
          {card}
        </StickyCard_001>
      ))}
    </div>
  );
};

export { Skiper16, StickyCard_001 };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
