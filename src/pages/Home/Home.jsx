// src/pages/Home/Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

const PILLARS = [
  {
    title: "Lorem ipsum dolor",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    title: "Consectetur adipiscing",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    title: "Totam rem aperiam",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__inner">
          <p className="page-eyebrow">The Established Legacy</p>
          <h1 className="page-heading home-hero__heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className="page-lede">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
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
        <h2 className="home-pillars__heading">Duis aute irure dolor</h2>
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
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <Link to="/sellability-score" className="button button--primary">
            Get your Sellability Score
          </Link>
        </div>
      </section>
    </>
  );
}
