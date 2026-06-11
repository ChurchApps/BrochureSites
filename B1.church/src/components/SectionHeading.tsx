import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "center" | "left";
  dark?: boolean;
  tone?: string;
}

const SectionHeading = ({ eyebrow, title, lead, align = "center", dark = false, tone }: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowTone = tone ?? (dark ? "text-primary-light" : "");
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <div className={`eyebrow mb-4 ${eyebrowTone}`}>{eyebrow}</div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${dark ? "text-ink-foreground" : "text-foreground"}`}>
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
