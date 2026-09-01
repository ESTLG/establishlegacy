// src/components/LandingIntro.jsx
import { useState } from "react";
import { landingContent } from "../../data/questions.js";
import "./LandingIntro.css";
import Wordmark_Gold from "../../../../assets/Wordmark_Gold.jpg";

/**
 * Landing page. Collects first name, last name, and email before the quiz
 * can start -- onStart only fires once all three are valid, and receives
 * the contact info so the parent (App.jsx) can save it to Firestore right
 * away, before any questions are answered.
 */
export default function LandingIntro({ onStart }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidFirstName = firstName.trim().length > 0;
  const isValidLastName = lastName.trim().length > 0;
  const isValid = isValidEmail && isValidFirstName && isValidLastName;

  function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    onStart({ firstName: firstName.trim(), lastName: lastName.trim(), email });
  }

  return (
    <div className="landing-intro">
      <img
        src={Wordmark_Gold}
        alt="The Established Legacy"
        className="landing-intro__logo"
      />

      <div className="landing-intro__eyebrow">Sellability Assessment</div>
      <h1 className="landing-intro__headline">{landingContent.headline}</h1>
      <p className="landing-intro__subheading">{landingContent.subheading}</p>
      <p className="landing-intro__description">{landingContent.description}</p>
      <p className="landing-intro__free-note">
        This is a completely free assessment &mdash; no cost, no obligation.
      </p>

      <form className="landing-intro__form" onSubmit={handleSubmit} noValidate>
        <div className="landing-intro__row">
          <input
            type="text"
            className="landing-intro__input"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={() => setTouched(true)}
            aria-invalid={touched && !isValidFirstName}
            aria-label="First name"
            autoComplete="given-name"
          />
          <input
            type="text"
            className="landing-intro__input"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={() => setTouched(true)}
            aria-invalid={touched && !isValidLastName}
            aria-label="Last name"
            autoComplete="family-name"
          />
        </div>
        <input
          type="email"
          className="landing-intro__input"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          aria-invalid={touched && !isValidEmail}
          aria-label="Email address"
          autoComplete="email"
        />
        {touched && !isValid && (
          <div className="landing-intro__error">
            Enter your first name, last name, and a valid email to continue.
          </div>
        )}

        <button type="submit" className="landing-intro__cta" disabled={!isValid}>
          Start the Free Assessment
        </button>
      </form>

      <div className="landing-intro__meta">Takes less than 5 minutes &middot; 15 questions</div>
    </div>
  );
}