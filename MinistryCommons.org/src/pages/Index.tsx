import { useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";

const verdicts: Record<string, { tier: string; code: string; body: string }> = {
  "no-no": { tier: "Share", code: "share", body: "Wide free use with doctrinal and artistic control. People may sing, teach, translate, and stream your work as you made it — nothing sold, nothing rewritten." },
  "yes-no": { tier: "Adapt", code: "adapt", body: "Made to be contextualized. People may remix and build on your work for ministry, and their versions must stay equally open. Nothing sold." },
  "yes-yes": { tier: "Open", code: "open", body: "Maximum spread. Paid curriculum, released recordings, and apps are all allowed — your credit travels with every copy." },
  "no-yes": { tier: "Share", code: "share", body: "There is no “sell it but don’t change it” tier. Choose Share, then sell commercial permission separately — the license explicitly allows permissions beyond its terms." }
};

const Index = () => {
  useTitle("Ministry Commons — Free-use licenses for songs and lessons in the church");
  const [adapt, setAdapt] = useState("");
  const [sell, setSell] = useState("");
  const verdict = adapt && sell ? verdicts[`${adapt}-${sell}`] : null;

  return (
    <main>
      <div className="titlepage container">
        <img className="hero-logo" src="/logo.svg" alt="Ministry Commons mark" width={80} height={80} />
        <p className="eyebrow">Free-use licenses for the church</p>
        <h1 className="display">Share your songs and lessons<br />with the whole church.</h1>
        <p className="subtitle">Ministry Commons is a set of Creative Commons–style licenses for worship music and teaching materials. Publish once, and any church on earth can sing it, teach it, translate it, and stream it — free, on the terms you choose.</p>
        <div className="cta-row">
          <a className="btn btn-rubric" href="#choose">Choose a license</a>
          <a className="btn" href="#licenses">Read the licenses</a>
        </div>
      </div>

      <hr className="section-rule" />

      <section id="how">
        <div className="container">
          <div className="section-head">
            <h2>How it works</h2>
            <p>Three steps, no license fees, no permission emails.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-no">I.</div>
              <h3>Pick a tier</h3>
              <p>You decide two things: may people adapt your work, and may they sell it. That gives three licenses.</p>
            </div>
            <div className="step">
              <div className="step-no">II.</div>
              <h3>Apply the notice</h3>
              <p>Put one short copyright notice on the work — a song sheet, lesson PDF, video description, or website.</p>
            </div>
            <div className="step">
              <div className="step-no">III.</div>
              <h3>The church uses it</h3>
              <p>Any congregation, ministry, or believer may use it under those terms, worldwide, without asking.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="licenses">
        <div className="container">
          <div className="section-head">
            <h2>The three licenses</h2>
            <p>Free tiers cover gathered ministry — services, classes, groups, and your own streams of them. Open adds media and sale.</p>
          </div>
          <div className="tiers">
            <article className="tier">
              <div className="tier-no"><span>No. 1</span><span>MC-S</span></div>
              <h3>Share</h3>
              <p className="meter">Use it in any gathering, as the creator made it. Don’t sell it.</p>
              <div className="badges" aria-label="License elements">
                <span className="badge" title="Ministry use only">MIN</span>
                <span className="badge" title="Attribution required">BY</span>
                <span className="badge" title="NonCommercial">NC</span>
                <span className="badge" title="No derivatives (adjustments allowed)">ND</span>
              </div>
              <ul className="grants">
                <li>Sing, teach, print, project, stream</li>
                <li>Translate &amp; re-key for your congregation</li>
                <li className="denied">No adaptations beyond that</li>
                <li className="denied">No commercial use</li>
                <li className="denied">No media channels or radio</li>
              </ul>
              <p className="cc-note">≈ CC BY-NC-ND, ministry-scoped</p>
              <div className="tier-links">
                <Link className="btn btn-rubric" to="/share">Deed</Link>
                <Link className="btn" to="/share-legal">Legal code</Link>
              </div>
            </article>
            <article className="tier">
              <div className="tier-no"><span>No. 2</span><span>MC-A</span></div>
              <h3>Adapt</h3>
              <p className="meter">Build on it for ministry. Don’t sell it. Share versions forward.</p>
              <div className="badges" aria-label="License elements">
                <span className="badge" title="Ministry use only">MIN</span>
                <span className="badge" title="Attribution required">BY</span>
                <span className="badge" title="NonCommercial">NC</span>
                <span className="badge" title="ShareAlike">SA</span>
              </div>
              <ul className="grants">
                <li>Everything in Share</li>
                <li>Edit, remix, contextualize, combine</li>
                <li>Adaptations stay equally open</li>
                <li className="denied">No commercial use</li>
                <li className="denied">No media channels or radio</li>
              </ul>
              <p className="cc-note">≈ CC BY-NC-SA, ministry-scoped</p>
              <div className="tier-links">
                <Link className="btn btn-rubric" to="/adapt">Deed</Link>
                <Link className="btn" to="/adapt-legal">Legal code</Link>
              </div>
            </article>
            <article className="tier">
              <div className="tier-no"><span>No. 3</span><span>MC-O</span></div>
              <h3>Open</h3>
              <p className="meter">Use it, build on it, even sell it — with credit.</p>
              <div className="badges" aria-label="License elements">
                <span className="badge" title="Ministry use only">MIN</span>
                <span className="badge" title="Attribution required">BY</span>
              </div>
              <ul className="grants">
                <li>Everything in Adapt</li>
                <li>Paid curriculum, events, apps</li>
                <li>Release &amp; monetize recordings</li>
                <li>Media, podcasts, radio &amp; broadcast</li>
                <li>Credit the creator, always</li>
              </ul>
              <p className="cc-note">≈ CC BY, ministry-scoped</p>
              <div className="tier-links">
                <Link className="btn btn-rubric" to="/open">Deed</Link>
                <Link className="btn" to="/open-legal">Legal code</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="baseline">
        <div className="container measure">
          <div className="baseline">
            <h2>Every tier includes</h2>
            <ul>
              <li>Sing, play, perform, teach from, project, print, and copy the work in ministry settings</li>
              <li>Stream, record, and archive your own free ministry services that include it</li>
              <li>Translate it into any language</li>
              <li>Change key, tempo, or arrangement for your congregation</li>
              <li>Make format and accessibility changes</li>
              <li>Attribution required; endorsement never implied</li>
            </ul>
            <p className="footnote">Translation, congregational arrangement, and accessibility changes are “ministry adjustments” — allowed in every tier, even Share, and never counted as adaptations. Free-tier use lives in gathered ministry: your services, classes, and groups, plus your own streams and recordings of them. Media channels and radio need the Open tier.</p>
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      <section id="choose">
        <div className="container measure chooser">
          <div className="section-head">
            <h2>Choose a license</h2>
            <p>Two questions decide it.</p>
          </div>
          <fieldset>
            <legend>May people change your work — rewrite lyrics, edit lessons, remix, build new resources on it?</legend>
            <label><input type="radio" name="q-adapt" value="yes" checked={adapt === "yes"} onChange={() => setAdapt("yes")} /> Yes, adapt it</label>
            <label><input type="radio" name="q-adapt" value="no" checked={adapt === "no"} onChange={() => setAdapt("no")} /> No, use it as-is</label>
          </fieldset>
          <fieldset>
            <legend>May people sell it — paid curriculum, released recordings, paid events or apps?</legend>
            <label><input type="radio" name="q-sell" value="yes" checked={sell === "yes"} onChange={() => setSell("yes")} /> Yes, sell it</label>
            <label><input type="radio" name="q-sell" value="no" checked={sell === "no"} onChange={() => setSell("no")} /> No, free use only</label>
          </fieldset>
          {verdict && (
            <div className="verdict" aria-live="polite">
              <h3>MC {verdict.tier} 1.0</h3>
              <p>{verdict.body}</p>
              <div className="tier-links">
                <Link className="btn btn-rubric" to={`/${verdict.code}`}>Read the deed</Link>
                <Link className="btn" to={`/${verdict.code}-legal`}>Legal code</Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <hr className="section-rule" />

      <section id="apply">
        <div className="container measure">
          <div className="section-head">
            <h2>Apply a license</h2>
            <p>Put this notice on or near the work. That’s the whole process.</p>
          </div>
          <pre className="notice">© <em>[Year]</em> <em>[Owner]</em>. Licensed under Ministry Commons <em>[Share / Adapt / Open]</em> 1.0.{"\n"}Source: <em>[URL]</em> · License: ministrycommons.org/<em>[share|adapt|open]</em>/1.0</pre>
          <p>For music, add a covered-assets line. Anything not listed is <strong>not</strong> licensed — so lyrics and charts can be free while the master recording stays reserved:</p>
          <pre className="notice">Covered assets: ☑ lyrics  ☑ melody/composition  ☑ chord charts{"\n"}                ☐ master recording  ☐ stems/multitracks  ☐ lyric video</pre>
          <p>Only license rights you actually control. If a publisher, label, or PRO administers the song, the license grants only what you can lawfully grant. Want to charge for commercial use? Pick Share or Adapt and sell commercial permission separately — the licenses explicitly allow permissions beyond their terms.</p>
          <h2 className="subhead">Giving credit</h2>
          <p>Using someone else’s Ministry Commons work? Attribute it in a way reasonable for the medium — a slide footer, video description, or credits page:</p>
          <pre className="notice">“<em>[Title]</em>” by <em>[Creator]</em>, © <em>[Year]</em>. Used under Ministry Commons <em>[Tier]</em> 1.0.{"\n"}Source: <em>[URL]</em>. Changes: <em>[none / translated into Spanish / adapted for children]</em></pre>
        </div>
      </section>

      <hr className="section-rule" />

      <section id="why-not-cc">
        <div className="container measure">
          <div className="section-head">
            <h2>Why not just Creative Commons?</h2>
            <p>CC is purpose-neutral. Church use isn’t.</p>
          </div>
          <ul className="freedoms">
            <li><b>“NonCommercial” draws the wrong line.</b> Under CC BY-NC, a nonprofit radio station or a not-yet-monetized YouTube channel qualifies as easily as your worship service. Ministry Commons free tiers are scoped to gathered ministry — services, classes, small groups, and your own streams of them — not to media outlets, even free ones.</li>
            <li><b>“NoDerivatives” breaks worship.</b> CC BY-ND forbids changing key, shortening a bridge, or translating lyrics. Every Ministry Commons tier allows these as ministry adjustments, without treating them as derivatives.</li>
            <li><b>Songs aren’t one asset.</b> CC licenses a work as a single unit. The Ministry Commons notice lists covered assets, so lyrics and charts can be free while the master recording stays reserved.</li>
            <li><b>Worship streams get claimed.</b> CC says nothing about Content ID. Every Ministry Commons tier forbids rights-management claims against permitted worship streams, and commits the creator to releasing mistaken ones.</li>
          </ul>
        </div>
      </section>

      <hr className="section-rule" />

      <section id="faq">
        <div className="container measure faq">
          <div className="section-head">
            <h2>Questions</h2>
          </div>
          <details>
            <summary>Do YouTube ads on our church livestream break the noncommercial rule?</summary>
            <p>No. Incidental platform advertising you don’t control is not commercial use. Neither are donations, tithes, offerings, or recovering printing and hosting costs. Commercial use means required payment for access or use primarily intended for commercial advantage.</p>
          </details>
          <details>
            <summary>Can a Christian YouTube channel or nonprofit radio station use these songs?</summary>
            <p>Not under Share or Adapt. The free tiers cover gathered ministry — worship services, classes, small groups, camps — plus your own livestreams and recordings of those gatherings. Standalone media use (channels, podcasts, radio, playlists) needs an Open-licensed work or the creator’s permission, even when the outlet is free or nonprofit.</p>
          </details>
          <details>
            <summary>Can we charge for a class that uses Share or Adapt material?</summary>
            <p>Only to recover direct costs. Required payment for access is commercial use and needs the Open tier or separate permission from the creator.</p>
          </details>
          <details>
            <summary>How does this relate to CCLI or Creative Commons?</summary>
            <p>It doesn’t — Ministry Commons is independent and not affiliated with Creative Commons, CCLI, ASCAP, BMI, SESAC, or GMR. A Ministry Commons license is a direct grant from the copyright owner. Songs administered through publishers or CCLI can only be licensed here to the extent the owner retained those rights.</p>
          </details>
          <details>
            <summary>Can the creator take the license back?</summary>
            <p>No. The grant is irrevocable as long as you follow the terms. Breaking the terms terminates your rights, but curing the violation within 30 days reinstates them automatically.</p>
          </details>
          <details>
            <summary>What about Content ID claims against our worship stream?</summary>
            <p>Every tier forbids using DRM or automated copyright claims to block use the license permits, and the licensor agrees to release mistaken automated claims. Put the license notice in your stream description to head off mistaken claims.</p>
          </details>
          <details>
            <summary>Why is every tier limited to ministry use?</summary>
            <p>That’s the family’s purpose. Secular commercial use, political campaigns, and non-ministry advertising always require separate permission — even under Open. If you want a purpose-neutral license, Creative Commons is the right tool.</p>
          </details>
        </div>
      </section>
    </main>
  );
};

export default Index;
