import "../../styles/atoms/Brand.css";

interface BrandLogoProps {
  src: string;
  alt?: string;
}

export function BrandLogo({ src, alt = "logo" }: BrandLogoProps) {
  return <img src={src} alt={alt} className="atom-brand-logo" />;
}
