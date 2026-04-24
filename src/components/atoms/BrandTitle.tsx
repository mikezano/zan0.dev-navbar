import "../../styles/atoms/Brand.css";

interface BrandTitleProps {
  title: string;
}

export function BrandTitle({ title }: BrandTitleProps) {
  return <span className="atom-brand-title">{title}</span>;
}
