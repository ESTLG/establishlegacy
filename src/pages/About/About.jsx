// src/pages/About/About.jsx
import "./About.css";

export default function About() {
  return (
    <>
      <section className="page-section page-section--tight">
        <p className="page-eyebrow">About</p>
        <h1 className="page-heading">Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
        <p className="page-lede">
          Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </section>

      <section className="page-section page-section--tight page-body">
        <p>
          Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </section>

      <section className="page-section about-values">
        <div className="about-values__item">
          <h3>Nemo enim ipsam</h3>
          <p>Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        </div>
        <div className="about-values__item">
          <h3>Magni dolores eos</h3>
          <p>Qui ratione voluptatem sequi nesciunt, neque porro quisquam est qui dolorem ipsum.</p>
        </div>
        <div className="about-values__item">
          <h3>Ut labore et dolore</h3>
          <p>Magnam aliquam quaerat voluptatem, ut enim ad minima veniam quis nostrum.</p>
        </div>
      </section>
    </>
  );
}
