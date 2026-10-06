// src/pages/About/About.jsx
import "./About.css";

export default function About() {
  return (
    <>
      <section className="page-section page-section--tight">
        <p className="page-eyebrow">About</p>
        <h1 className="page-heading">Helping owners turn hard work into lasting value</h1>
        <p className="page-lede">
          The Established Legacy helps business owners prepare for one of the most
          important decisions they will make: selling the company they built.
        </p>
      </section>

      <section className="page-section page-section--tight page-body">
        <p>
          Many owners only think about sellability when they are ready to leave, and
          by then it is too late to fix what buyers care about most. A business that
          depends on its owner, runs on undocumented processes, or lacks a strong
          leadership team is worth less, no matter how profitable it is.
        </p>
        <p>
          We work with owners years before a sale to close those gaps. We identify
          what is holding back your value, build the systems and team that let the
          business run without you, and help you go to market with confidence.
        </p>
        <p>The Established Legacy is powered by IMA Consulting.</p>
      </section>

      <section className="page-section about-values">
        <div className="about-values__item">
          <h3>Clarity first</h3>
          <p>We start with an honest assessment, so every recommendation is grounded in where your business really stands.</p>
        </div>
        <div className="about-values__item">
          <h3>Practical results</h3>
          <p>We focus on the changes buyers notice and value: documented systems, operational independence, and leadership depth.</p>
        </div>
        <div className="about-values__item">
          <h3>Your legacy, your terms</h3>
          <p>Whether you sell next year or in five, we help you leave on your timeline, with the value your work deserves.</p>
        </div>
      </section>
    </>
  );
}
