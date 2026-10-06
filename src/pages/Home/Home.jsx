// src/pages/Home/Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

const PILLARS = [
  {
    title: "Know your number",
    text: "See how buyers value your business today.",
  },
  {
    title: "Step back",
    text: "Build a business that runs without you.",
  },
  {
    title: "Sell stronger",
    text: "Go to market ready, and on your terms.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__inner">
          <p className="page-eyebrow">The Established Legacy</p>
          <h1 className="page-heading home-hero__heading">
            Build a business buyers want
          </h1>
          <p className="page-lede">Raise its value. Then sell on your terms.</p>
          <div className="home-hero__actions">
            <Link to="/sellability-score" className="button button--primary">
              Take the Sellability Assessment
            </Link>
            <Link to="/about" className="button button--outline">
              Learn more about us
            </Link>
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
          <h2>Curious where your business stands?</h2>
          <p>Free. 5 minutes. Instant score.</p>
          <Link to="/sellability-score" className="button button--primary">
            Get your Sellability Score
          </Link>
        </div>
      </section>
    </>
  );
}
