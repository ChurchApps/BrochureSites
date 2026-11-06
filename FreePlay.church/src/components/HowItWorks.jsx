export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Browse lessons on the TV',
      alt: 'FreePlay TV app home screen showing lessons from content providers',
      description: 'Explore our growing library of curriculum from trusted providers',
      image: '/images/screenshots/screenshot-01.webp',
    },
    {
      number: 2,
      title: 'Click once to download',
      alt: 'FreePlay lesson screen with a one-click download button',
      description: 'One-click download makes it simple to get content ready',
      image: '/images/screenshots/screenshot-02.webp',
    },
    {
      number: 3,
      title: 'Press play with the remote',
      alt: 'FreePlay playing a downloaded church lesson full screen on a TV',
      description: 'Start the lesson with a single button press',
      image: '/images/screenshots/screenshot-03.webp',
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="section-header">
        <h2 className="section-title">
          How It <span className="highlight">Works</span>
        </h2>
        <p className="section-subtitle">
          Get started in minutes with these simple steps
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.number} className="step">
            <div className="step-number">
              {step.number}
            </div>

            <div className="step-image">
              <img
                src={step.image}
                alt={step.alt}
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3 className="step-title">
              {step.title}
            </h3>

            <p className="step-description">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
