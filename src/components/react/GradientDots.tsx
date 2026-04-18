'use client';

import React from 'react';
import { motion } from 'framer-motion';

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
  dotSize?: number;
  spacing?: number;
  duration?: number;
  backgroundColor?: string;
};

export function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 40,
  backgroundColor = 'white',
  className,
  ...props
}: GradientDotsProps) {
  const hexSpacing = spacing * 1.732;

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className ?? ''}`}
      style={{
        backgroundColor,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 20% 30%, rgba(180, 215, 255, 0.22), transparent 60%),
          radial-gradient(circle at 80% 70%, rgba(200, 225, 255, 0.16), transparent 55%),
          radial-gradient(circle at 50% 50%, rgba(200, 235, 215, 0.12), transparent 50%),
          radial-gradient(ellipse at 70% 20%, rgba(225, 215, 255, 0.13), transparent 55%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% 200%
        `,
        backgroundPosition: `
          0px 0px, ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%
        `,
      }}
      animate={{
        backgroundPosition: [
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 100% 100%, 50% 0%, 0% 100%`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 100% 100%, 0% 0%, 100% 50%, 100% 0%`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 100% 100%, 50% 0%, 0% 100%`,
        ],
      }}
      transition={{
        backgroundPosition: { duration, ease: 'linear', repeat: Number.POSITIVE_INFINITY },
      }}
      {...props}
    />
  );
}
