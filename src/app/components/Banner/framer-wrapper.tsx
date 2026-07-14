'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FramerWrapperProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}

export default function FramerWrapper({ children, delay = 0, yOffset = 20 }: FramerWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.21, 1.02, 0.43, 1.01], // Fluid custom cubic-bezier
      }}
    >
      {children}
    </motion.div>
  );
}