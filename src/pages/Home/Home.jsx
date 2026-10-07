// src/pages/Home/Home.jsx
import { Link } from "react-router-dom";
import { IMA_URL } from "../../lib/constants";
import "./Home.css";

const PILLARS = [
  {
    title: "Know what it's worth",
    text: "See your business the way a buyer will.",
  },
  {
    title: "Step back with confidence",
    text: "Make sure it runs without you.",
  },
  {
    title: "Sell on your terms",
    text: "Your timeline. Your price. Your legacy.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__inner">
          <p className="page-eyebrow">The Established Legacy</p>
          <h1 className="page-heading home-hero__heading">
            You built it. Now get what it's worth.
          </h1>
          <p className="page-lede">
            Thinking about selling your business in the next few years? We help
            owners prepare, so they retire on their terms.
          </p>
          <div className="home-hero__actions">
            <Link to="/sellability-score" className="button button--primary">
              Take the Free Assessment
            </Link>
            <a href={IMA_URL} className="button button--outline">
              Visit IMA Consulting
            </a>
          </div>
        </div>
      </section>

      <section className="page-section home-pillars">
        <h2 className="home-pillars__heading">How we help</h2>
        <div className="home-pillars__grid">
          {PILLARS.map((pillar) => (
            <div className="home-pillars__card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-banner">
        <div className="home-banner__inner">
          <h2>Backed by IMA Consulting</h2>
          <p>Experienced advisors who help businesses grow and transform.</p>
          <a href={IMA_URL} className="button button--primary">
            Visit IMA Consulting
          </a>
        </div>
      </section>
    </>
  );
}
