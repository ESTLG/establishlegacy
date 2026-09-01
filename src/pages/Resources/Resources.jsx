// src/pages/Resources/Resources.jsx
import "./Resources.css";

const RESOURCES = [
  {
    tag: "Guide",
    title: "Lorem ipsum dolor sit amet",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    tag: "Checklist",
    title: "Ut enim ad minim veniam",
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    tag: "Article",
    title: "Duis aute irure dolor",
    text: "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    tag: "Video",
    title: "Excepteur sint occaecat",
    text: "Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Resources() {
  return (
    <>
      <section className="page-section page-section--tight">
        <p className="page-eyebrow">Resources</p>
        <h1 className="page-heading">Lorem ipsum dolor sit amet, consectetur</h1>
        <p className="page-lede">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.
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
