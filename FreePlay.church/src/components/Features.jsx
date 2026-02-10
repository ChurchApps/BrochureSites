export default function Features() {
  const features = [
    {
      badge: '100% Free',
      title: 'No Cost, Ever',
      description: 'FreePlay is completely free for all churches. No subscriptions, no hidden fees, no limits. Made by the church, for the church.',
      image: '/images/hero-classroom-scene.png',
    },
    {
      badge: 'Offline Ready',
      title: 'Play Without Internet',
      description: 'Download lessons in advance and play them offline. Perfect for churches with limited or unreliable connectivity.',
      image: '/images/real/play_without_internet.png',
    },
    {
      badge: 'TV Optimized',
      title: 'Built for Big Screens',
      description: 'Built specifically for Apple TV, Android TV, and Amazon Fire Stick. Download directly on your TV or streaming device and control everything with just your TV remote. Not a phone app - this is made for the big screen.',
      image: '/images/multi-device-showcase.png',
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="section-title">
          Designed for <span className="highlight">Churches</span>
        </h2>
        <p className="section-subtitle">
          Every feature built with your ministry in mind
        </p>

        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className={`feature-row ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="feature-content">
                <div className="feature-badge">{feature.badge}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className="feature-media">
                <img src={feature.image} alt={feature.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
