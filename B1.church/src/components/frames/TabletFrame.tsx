interface TabletFrameProps {
  src: string;
  alt: string;
  className?: string;
}

const TabletFrame = ({ src, alt, className = "" }: TabletFrameProps) => (
  <div className={`rounded-[1.75rem] bg-slate-800 p-3 shadow-screenshot ${className}`}>
    <div className="overflow-hidden rounded-[1.1rem]">
      <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
    </div>
  </div>
);

export default TabletFrame;
