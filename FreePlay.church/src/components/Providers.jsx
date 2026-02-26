import { useEffect, useRef, useState } from 'react';

export default function Providers() {
  const providers = [
    {
      name: 'SignPresenter',
      logo: '/images/providers/signpresenter.png',
      url: 'https://www.signpresenter.com/churches',
    },
    {
      name: 'B1.Church',
      logo: '/images/providers/b1church-dark.png',
      url: 'https://b1.church/',
    },
    {
      name: 'Lessons.church',
      logo: '/images/providers/lessons-church.png',
      url: 'https://lessons.church/',
    },
    {
      name: 'The Bible Project',
      logo: '/images/providers/bibleproject.png',
      url: 'https://bibleproject.com/',
    },
    {
      name: 'Jesus Film',
      logo: '/images/providers/jesus-film.webp',
      url: 'https://www.jesusfilm.org/',
    },
    {
      name: 'Dropbox',
      logo: '/images/providers/dropbox.png',
      url: 'https://dropbox.com/',
    },
  ];

  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationId;
    let pos = 0;
    const speed = 0.25; // px per frame

    function step() {
      if (!paused) {
        pos += speed;
        // Each card is 25% wide (4 visible). Reset after scrolling one full set.
        const halfWidth = track.scrollWidth / 2;
        if (pos >= halfWidth) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      animationId = requestAnimationFrame(step);
    }

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [paused]);

  // Duplicate the list for seamless looping
  const items = [...providers, ...providers];

  return (
    <section id="providers" className="providers">
      <div className="section-header">
        <h2 className="section-title">
          Content Providers
        </h2>
        <p className="section-subtitle">
          Trusted curriculum from leading organizations
        </p>
      </div>

      <div
        className="providers-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="providers-track" ref={trackRef}>
          {items.map((provider, i) => (
            <a
              key={`${provider.name}-${i}`}
              href={provider.url}
              target="_blank"
              rel="noopener noreferrer"
              className="provider-card"
            >
              <img
                src={provider.logo}
                alt={provider.name}
              />
            </a>
          ))}
        </div>
      </div>

      <p className="providers-note">
        More providers coming soon!
      </p>
    </section>
  );
}
