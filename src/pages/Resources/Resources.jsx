// src/pages/Resources/Resources.jsx
import "./Resources.css";

const RESOURCES = [
  {
    tag: "Guide",
    title: "What buyers look for in a business",
    text: "The operational, financial, and leadership qualities that drive valuation, and how to strengthen them before you sell.",
  },
  {
    tag: "Checklist",
    title: "Exit readiness checklist",
    text: "A step-by-step list of what to have in place before you start conversations with buyers.",
  },
  {
    tag: "Article",
    title: "Reducing owner dependence",
    text: "Why businesses that rely on their owner sell for less, and practical ways to step back from daily operations.",
  },
  {
    tag: "Video",
    title: "Planning your exit timeline",
    text: "How far ahead to start preparing, and what to focus on in the years leading up to a sale.",
  },
];

export default function Resources() {
  return (
    <>
      <section className="page-section page-section--tight">
        <p className="page-eyebrow">Resources</p>
        <h1 className="page-heading">Tools to prepare your business for sale</h1>
        <p className="page-lede">
          Guides, checklists, and insights to help you understand what drives value
          and take practical steps toward a successful exit.
        </p>
      </section>

      <section className="page-section resources-grid">
        {RESOURCES.map((resource) => (
          <article className="resource-card" key={resource.title}>
            <span className="resource-card__tag">{resource.tag}</span>
            <h2>{resource.title}</h2>
            <p>{resource.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
