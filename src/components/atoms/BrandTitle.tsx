import styles from "./BrandTitle.module.css";

interface BrandTitleProps {
  title: string;
}

export function BrandTitle({ title }: BrandTitleProps) {
  return <span className={styles.title}>{title}</span>;
}
