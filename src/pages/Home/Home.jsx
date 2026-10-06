// src/pages/Home/Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

const PILLARS = [
  {
    title: "Know where you stand",
    text: "Get a clear, honest read on how buyers will see your business today, and where its value is being held back.",
  },
  {
    title: "Build a business that runs without you",
    text: "Document your systems, strengthen your leadership team, and reduce owner dependence, so the business keeps performing after you step away.",
  },
  {
    title: "Exit on your terms",
    text: "Go to market with a business that is organized, scalable, and ready for due diligence, and negotiate from a position of strength.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__inner">
          <p className="page-eyebrow">The Established Legacy</p>
          <h1 className="page-heading home-hero__heading">
            Build a business buyers want to own
          </h1>
          <p className="page-lede">
            Your business is your legacy. We help owners increase its value, reduce
            their day-to-day involvement, and prepare for a successful sale.
          </p>
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
        <h2 className="home-pillars__heading">How we help you prepare</h2>
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
          <p>
            The free Sellability Assessment takes a few minutes and shows how
            market-ready your business is, plus the areas that can raise its value.
          </p>
          <Link to="/sellability-score" className="button button--primary">
            Get your Sellability Score
          </Link>
        </div>
      </section>
    </>
  );
}
