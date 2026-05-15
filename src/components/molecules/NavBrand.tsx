import { Link } from "react-router-dom";
import { BrandLogo } from "../atoms/BrandLogo";
import { BrandTitle } from "../atoms/BrandTitle";
import styles from "./NavBrand.module.css";

interface NavBrandProps {
  title: string;
  logoSrc?: string;
}

export function NavBrand({ title, logoSrc }: NavBrandProps) {
  return (
    <Link to="/" className={styles.brand}>
      {logoSrc && <BrandLogo src={logoSrc} alt={title} />}
      <BrandTitle title={title} />
    </Link>
  );
}
