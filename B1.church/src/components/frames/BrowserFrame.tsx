interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  eager?: boolean;
}

const BrowserFrame = ({ src, alt, url = "app.b1.church", className = "", eager = false }: BrowserFrameProps) => (
  <div className={`overflow-hidden rounded-xl bg-card ring-1 ring-black/5 shadow-screenshot ${className}`}>
    <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      <span className="mx-auto flex items-center rounded-md bg-background px-4 py-0.5 text-xs text-muted-foreground">
        {url}
      </span>
      <span className="w-12" />
    </div>
    <img
      src={src}
      alt={alt}
      className="block w-full h-auto"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  </div>
);

export default BrowserFrame;
