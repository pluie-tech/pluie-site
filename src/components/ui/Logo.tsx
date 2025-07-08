import Image from "next/image";

export interface LogoProps {
  size?: number;
  withName?: boolean;
  className?: string;
}

const imageSrcs = {
  symbol: "/Pluie-símbolo.svg",
  logo: "/Pluie-logo.svg",
}

export default function Logo({ size = 64, withName = false, className }: LogoProps) {
  const aspectRatio = 74 / 64;
  const width = size;
  const height = size * aspectRatio;

  const src = withName ? imageSrcs.logo : imageSrcs.symbol;

  return <Image src={src} alt="Pluie Logo" width={width} height={height} aria-label="Pluie Logo" className={className} />;
}
