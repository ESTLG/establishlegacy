// src/pages/Resources/Resources.jsx
import "./Resources.css";

const RESOURCES = [
  {
    tag: "Guide",
    title: "What buyers look for",
    text: "The qualities that drive your valuation.",
  },
  {
    tag: "Checklist",
    title: "Exit readiness checklist",
    text: "What to have in place before you talk to buyers.",
  },
  {
    tag: "Article",
    title: "Reducing owner dependence",
    text: "Why it costs you, and how to step back.",
  },
  {
    tag: "Video",
    title: "Planning your exit timeline",
    text: "When to start, and what to focus on.",
  },
];

export default function Resources() {
  return (
    <>
      <section className="page-section page-section--tight">
        <p className="page-eyebrow">Resources</p>
        <h1 className="page-heading">Prepare to sell</h1>
        <p className="page-lede">Practical tools to raise your business's value.</p>
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
