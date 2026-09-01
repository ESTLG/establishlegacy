// src/components/BookCallCTA/BookCallCTA.jsx
import "./BookCallCTA.css";

// TODO: replace "#" with your real scheduling link (Calendly, etc.)
const BOOKING_URL = "#";

export default function BookCallCTA() {
  return (
    <div className="book-call-cta">
      <h3 className="book-call-cta__heading">Ready to increase your score?</h3>
      <p className="book-call-cta__body">
        Talk to a consultant about the specific steps that will raise your sellability and maximize your business's value.
      </p>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="book-call-cta__button"
      >
        Book a Call
      </a>
    </div>
  );
}