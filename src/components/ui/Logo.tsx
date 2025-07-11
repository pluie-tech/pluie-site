import { MotionValue } from 'motion';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';

export interface LogoProps {
  size?: number | MotionValue<number>;
  withName?: boolean;
  className?: string;
}

const imageSrcs = {
  symbol: "/Pluie-símbolo.svg",
  logo: "/Pluie-logo.svg",
}

export default function Logo({ size = 64, withName = false, className }: LogoProps) {
  const src = withName ? imageSrcs.logo : imageSrcs.symbol;
  const aspectRatio = 74 / 64;
  const motionSize = useMotionValue(typeof size === "number" ? size : 0);
  const motionHeight = useTransform(motionSize, (val) => val * aspectRatio);

  useEffect(() => {
    if (typeof size !== "number") {
      const unsubscribe = size.on('change', (latest) => {
        motionSize.set(latest);
      });
      return () => unsubscribe();
    } else {
      motionSize.set(size);
    }
  }, [size, motionSize]);


  return <motion.img
    src={src}
    alt="Pluie Logo"
    style={{
      width: motionSize,
      height: motionHeight,
    }}
    aria-label="Pluie Logo"
    className={className}
  />;
}
