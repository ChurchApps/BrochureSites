interface PhoneFrameProps {
  src: string;
  alt: string;
  tilt?: "left" | "right" | "none";
  className?: string;
  eager?: boolean;
}

const tiltClasses = {
  left: "-rotate-2",
  right: "rotate-2",
  none: ""
};

const PhoneFrame = ({ src, alt, tilt = "none", className = "", eager = false }: PhoneFrameProps) => (
  <div className={`max-w-[260px] ${tiltClasses[tilt]} ${className}`}>
    <img
      src={src}
      alt={alt}
      className="block w-full h-auto drop-shadow-[0_24px_48px_hsl(217_60%_30%/0.3)]"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  </div>
);

export default PhoneFrame;
