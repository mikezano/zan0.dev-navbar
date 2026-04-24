import { BrandLogo } from "../atoms/BrandLogo";
import { BrandTitle } from "../atoms/BrandTitle";
import "../../styles/molecules/NavBrand.css";

interface NavBrandProps {
  title: string;
  logoSrc?: string;
}

export function NavBrand({ title, logoSrc }: NavBrandProps) {
  return (
    <div className="molecule-nav-brand">
      {logoSrc && <BrandLogo src={logoSrc} alt={title} />}
      <BrandTitle title={title} />
    </div>
  );
}
