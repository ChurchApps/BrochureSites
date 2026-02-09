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
  ];

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

      <div className="providers-grid">
        {providers.map((provider) => (
          <a
            key={provider.name}
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

      <p className="providers-note">
        More providers coming soon!
      </p>
    </section>
  );
}
