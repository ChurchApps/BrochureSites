export default function Comparison() {
  return (
    <section className="comparison">
      <div className="comparison-container">
        <h2 className="section-title">
          The Old Way vs. The <span className="highlight">FreePlay</span> Way
        </h2>
        <p className="section-subtitle">See the dramatic difference</p>

        <div className="comparison-grid">
          <div className="comparison-box old">
            <div className="comparison-label">The Old Way 😫</div>
            <div className="comparison-image">
              <img src="/images/real/realbeforefreeplayscenario.png" alt="Frustrated teacher managing cables and computer" />
            </div>
            <h3>Complicated & Frustrating</h3>
            <ul className="comparison-list">
              <li>
                <span className="icon-bad">✗</span>
                <span>Teachers download files manually</span>
              </li>
              <li>
                <span className="icon-bad">✗</span>
                <span>Manage a computer every Sunday</span>
              </li>
              <li>
                <span className="icon-bad">✗</span>
                <span>Create playlists ahead of time</span>
              </li>
              <li>
                <span className="icon-bad">✗</span>
                <span>Tech breaks or confuses teachers</span>
              </li>
            </ul>
          </div>

          <div className="comparison-box new">
            <div className="comparison-label">With FreePlay 🎉</div>
            <div className="comparison-image">
              <img src="/images/real/realafterfreeplayscenario.png" alt="Happy teacher using FreePlay with remote" />
            </div>
            <h3>Simple & Powerful</h3>
            <ul className="comparison-list">
              <li>
                <span className="icon-good">✓</span>
                <span>One-click download</span>
              </li>
              <li>
                <span className="icon-good">✓</span>
                <span>Controlled with a remote</span>
              </li>
              <li>
                <span className="icon-good">✓</span>
                <span>No preparation needed</span>
              </li>
              <li>
                <span className="icon-good">✓</span>
                <span>Browse lessons directly on TV</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
