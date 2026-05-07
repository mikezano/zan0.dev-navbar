import styles from "./BrandLogo.module.css";

interface BrandLogoProps {
  src: string;
  alt?: string;
}

export function BrandLogo({ src, alt = "logo" }: BrandLogoProps) {
  return <img src={src} alt={alt} className={styles.logo} />;
}
