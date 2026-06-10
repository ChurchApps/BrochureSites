import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "center" | "left";
  dark?: boolean;
}

const SectionHeading = ({ eyebrow, title, lead, align = "center", dark = false }: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <div className={`eyebrow mb-4 ${dark ? "text-primary-light" : ""}`}>{eyebrow}</div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${dark ? "text-ink-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-lg md:text-xl leading-relaxed ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>
          {lead}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
