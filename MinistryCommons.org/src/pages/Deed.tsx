import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";

type Tier = "share" | "adapt" | "open";

const badgeTitles: Record<string, string> = {
  MIN: "Ministry use only",
  BY: "Attribution required",
  NC: "NonCommercial",
  ND: "No derivatives (adjustments allowed)",
  SA: "ShareAlike"
};

const deeds: Record<Tier, {
  title: string;
  code: string;
  name: string;
  motto: string;
  badges: string[];
  freedoms: [string, string][];
  terms: [string, string][];
  notices: ReactNode;
}> = {
  share: {
    title: "MC Share 1.0 — Deed — Ministry Commons",
    code: "NO. 1 · MC-S · DEED",
    name: "MC Share 1.0",
    motto: "Use it freely in ministry, as the creator made it. Don’t sell it.",
    badges: ["MIN", "BY", "NC", "ND"],
    freedoms: [
      ["Use", "sing, play, perform, teach from, project, print, and copy the work in worship services, classes, small groups, camps, missions, and other ministry settings."],
      ["Share", "distribute copies and stream, record, or archive your own free ministry services and events that include it."],
      ["Adjust", "translate it, change key, tempo, or arrangement for your congregation, and make format or accessibility changes."]
    ],
    terms: [
      ["Gathered ministry", "use it in ministry gatherings — services, classes, small groups, camps, missions — and your own livestreams and recordings of them. Not as content for a media channel, podcast, or radio station, even a free or nonprofit one."],
      ["Attribution", "credit the creator, keep notices, and mark any translation as unofficial."],
      ["NonCommercial", "don’t sell it or require payment for access. Donations, tithes, and cost recovery are fine."],
      ["No adaptations", "no changes beyond the adjustments listed above."],
      ["No endorsement, no lockup", "don’t imply the creator endorses you, and don’t use DRM or copyright claims to block anyone else’s permitted use."]
    ],
    notices: <><strong>Notices.</strong> Third-party material — Bible translation text, stock media, and any assets (like master recordings) not listed in the license notice — is not covered. Uses beyond this license — including commercial use, media channels and radio, and adaptations — need separate permission from the creator. No warranties are given.</>
  },
  adapt: {
    title: "MC Adapt 1.0 — Deed — Ministry Commons",
    code: "NO. 2 · MC-A · DEED",
    name: "MC Adapt 1.0",
    motto: "Use it and build on it freely in ministry. Don’t sell it. Share your versions forward.",
    badges: ["MIN", "BY", "NC", "SA"],
    freedoms: [
      ["Use", "sing, play, perform, teach from, project, print, and copy the work in worship services, classes, small groups, camps, missions, and other ministry settings."],
      ["Share", "distribute copies and stream, record, or archive your own free ministry services and events that include it."],
      ["Adjust", "translate it, change key, tempo, or arrangement, and make format or accessibility changes."],
      ["Adapt", "edit, remix, shorten, expand, contextualize for a culture, age group, or setting, combine with other material, and create new resources based on it."]
    ],
    terms: [
      ["Gathered ministry", "use it in ministry gatherings — services, classes, small groups, camps, missions — and your own livestreams and recordings of them. Not as content for a media channel, podcast, or radio station, even a free or nonprofit one."],
      ["Attribution", "credit the creator, keep notices, and clearly mark what you changed."],
      ["NonCommercial", "don’t sell it or your adaptation, or require payment for access. Donations, tithes, and cost recovery are fine."],
      ["ShareAlike", "adaptations you share must be licensed under MC Adapt, MC Open, or terms giving at least the same ministry permissions."],
      ["No endorsement, no lockup", "don’t imply the creator endorses you, and don’t use DRM or copyright claims to block anyone else’s permitted use of the original."]
    ],
    notices: <><strong>Notices.</strong> Third-party material — Bible translation text, stock media, and any assets (like master recordings) not listed in the license notice — is not covered. Uses beyond this license — including commercial use and media channels and radio — need separate permission from the creator. No warranties are given.</>
  },
  open: {
    title: "MC Open 1.0 — Deed — Ministry Commons",
    code: "NO. 3 · MC-O · DEED",
    name: "MC Open 1.0",
    motto: "Use it, build on it, even sell it — in ministry settings, with credit.",
    badges: ["MIN", "BY"],
    freedoms: [
      ["Use", "sing, play, perform, teach from, project, print, and copy the work in worship services, classes, small groups, camps, missions, and other ministry settings."],
      ["Share", "distribute copies and stream, record, or archive ministry services and events that include it."],
      ["Adjust", "translate it, change key, tempo, or arrangement, and make format or accessibility changes."],
      ["Adapt", "edit, remix, expand, contextualize, combine with other material, and create new resources based on it."],
      ["Sell", "use it in paid curriculum, paid events, paid apps, and subscriptions; release and monetize recordings; receive advertising, sponsorship, or platform revenue connected to it."]
    ],
    terms: [
      ["Ministry use", "any Christian ministry purpose, paid or free — including media channels, podcasts, radio, and broadcast. Secular commercial use needs separate permission."],
      ["Attribution", "credit the creator, keep notices, and clearly mark what you changed."],
      ["No endorsement, no lockup", "don’t imply the creator endorses you, and don’t use DRM or copyright claims to block anyone else’s permitted use of the original."]
    ],
    notices: <><strong>Notices.</strong> Third-party material — Bible translation text, stock media, and any assets (like master recordings) not listed in the license notice — is not covered. No warranties are given.</>
  }
};

const Deed = ({ tier }: { tier: Tier }) => {
  const d = deeds[tier];
  useTitle(d.title);

  return (
    <main className="deed container measure">
      <div className="deed-plate">
        <div className="tier-code">{d.code}</div>
        <h1>{d.name}</h1>
        <p className="motto">{d.motto}</p>
        <div className="badges" aria-label="License elements">
          {d.badges.map((b) => <span key={b} className="badge" title={badgeTitles[b]}>{b}</span>)}
        </div>
      </div>
      <p className="deed-note">This deed is a plain-language summary of, and not a substitute for, the <Link to={`/${tier}-legal`}>legal code</Link>.</p>

      <h2>You are free to</h2>
      <ul className="freedoms">
        {d.freedoms.map(([label, text]) => <li key={label}><b>{label}</b> — {text}</li>)}
      </ul>
      <p><em>The creator cannot revoke these freedoms as long as you follow the terms.</em></p>

      <h2 className="rubric-head">Under the following terms</h2>
      <ul className="terms">
        {d.terms.map(([label, text]) => <li key={label}><b>{label}</b> — {text}</li>)}
      </ul>

      <div className="notices">
        <p>{d.notices}</p>
        <div className="tier-links">
          <Link className="btn btn-rubric" to={`/${tier}-legal`}>Read the legal code</Link>
          <Link className="btn" to="/#licenses">All licenses</Link>
        </div>
      </div>
    </main>
  );
};

export default Deed;
