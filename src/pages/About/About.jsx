// src/pages/About/About.jsx
import "./About.css";

export default function About() {
  return (
    <>
      <section className="page-section page-section--tight">
        <p className="page-eyebrow">About</p>
        <h1 className="page-heading">Your business is your legacy</h1>
        <p className="page-lede">We help owners make it worth more before they sell.</p>
      </section>

      <section className="page-section page-section--tight page-body">
        <p>
          Buyers pay less for businesses that depend on their owner. We fix that,
          years before you sell.
        </p>
        <p>Powered by IMA Consulting.</p>
      </section>

      <section className="page-section about-values">
        <div className="about-values__item">
          <h3>Clarity first</h3>
          <p>An honest look at where you stand.</p>
        </div>
        <div className="about-values__item">
          <h3>Practical results</h3>
          <p>Changes buyers notice and pay for.</p>
        </div>
        <div className="about-values__item">
          <h3>Your terms</h3>
          <p>Your timeline. Your price.</p>
        </div>
      </section>
    </>
  );
}
