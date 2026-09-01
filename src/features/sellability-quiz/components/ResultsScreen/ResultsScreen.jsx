// src/components/ResultsScreen/ResultsScreen.jsx
import { maxScore } from "../../data/questions";
import BookCallCTA from "../BookCallCTA/BookCallCTA";
import ScoreMeter from "../ScoreMeter/ScoreMeter";
import "./ResultsScreen.css";

export default function ResultsScreen({ rawScore, resultTier }) {
  const percentage = Math.round((rawScore / maxScore) * 100);

  return (
    <div className="results-screen">
      <div className="results-screen__eyebrow">Your Results</div>

      <div className="results-screen__score">
        <span className="results-screen__score-number">{percentage}</span>
        <span className="results-screen__score-max">%</span>
      </div>

      <ScoreMeter percentage={percentage} />

      <h2 className="results-screen__tier">{resultTier.label}</h2>
      <p className="results-screen__text">{resultTier.text}</p>

      <BookCallCTA />
    </div>
  );
}