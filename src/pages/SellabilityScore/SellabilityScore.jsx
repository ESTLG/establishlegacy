// src/pages/SellabilityScore/SellabilityScore.jsx
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { collection, addDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db, COLLECTIONS } from "../../lib/firebase";
import { useQuizState } from "../../features/sellability-quiz/hooks/useQuizState";
import LandingIntro from "../../features/sellability-quiz/components/LandingIntro/LandingIntro";
import QuestionCard from "../../features/sellability-quiz/components/QuestionCard/QuestionCard";
import ResultsScreen from "../../features/sellability-quiz/components/ResultsScreen/ResultsScreen";
import "../../features/sellability-quiz/quiz-app.css";

export default function SellabilityScore() {
  const quiz = useQuizState();
  // Tracks the Firestore doc created at start, so we can update the same
  // record with results instead of creating a second document.
  const submissionIdRef = useRef(null);
  const hasSavedResultsRef = useRef(false);

  async function handleStart(contactInfo) {
    // Move into the quiz immediately -- don't make the user wait on the network.
    quiz.startQuiz(contactInfo);
    try {
      const ref = await addDoc(collection(db, COLLECTIONS.sellabilitySubmissions), {
        firstName: contactInfo.firstName,
        lastName: contactInfo.lastName,
        email: contactInfo.email,
        status: "started",
        createdAt: serverTimestamp(),
      });
      submissionIdRef.current = ref.id;
    } catch (err) {
      console.error("Failed to save contact info:", err);
    }
  }

  // When the quiz reaches the results screen, save the full results --
  // updating the "started" doc if we have its id, or creating a fresh
  // doc as a fallback if the initial write failed or hadn't resolved yet.
  useEffect(() => {
    if (quiz.step !== "results" || hasSavedResultsRef.current) return;
    hasSavedResultsRef.current = true;

    const payload = quiz.buildSubmissionPayload();

    (async () => {
      try {
        if (submissionIdRef.current) {
          await updateDoc(doc(db, COLLECTIONS.sellabilitySubmissions, submissionIdRef.current), {
            ...payload,
            status: "completed",
            completedAt: serverTimestamp(),
          });
        } else {
          await addDoc(collection(db, COLLECTIONS.sellabilitySubmissions), {
            ...payload,
            status: "completed",
            createdAt: serverTimestamp(),
            completedAt: serverTimestamp(),
          });
        }
      } catch (err) {
        console.error("Failed to save quiz results:", err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz.step]);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {quiz.step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <LandingIntro onStart={handleStart} />
          </motion.div>
        )}

        {typeof quiz.step === "number" && (
          <motion.div
            key={`question-${quiz.step}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <QuestionCard
              question={quiz.currentQuestion}
              questionNumber={quiz.step + 1}
              totalQuestions={quiz.totalQuestions}
              totalSteps={quiz.totalQuestions + 1}
              currentStep={quiz.step + 1}
              progress={quiz.progress}
              selectedChoiceIndex={quiz.answers[quiz.currentQuestion.id]}
              onSelect={(choiceIndex) => quiz.selectAnswer(quiz.currentQuestion.id, choiceIndex)}
              onBack={quiz.goBack}
              showBack={quiz.step > 0}
            />
          </motion.div>
        )}

        {quiz.step === "bonus" && (
          <motion.div
            key="bonus"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <QuestionCard
              question={quiz.bonusQuestion}
              totalQuestions={quiz.totalQuestions}
              totalSteps={quiz.totalQuestions + 1}
              currentStep={quiz.totalQuestions + 1}
              progress={quiz.progress}
              selectedChoiceIndex={quiz.bonusAnswer}
              onSelect={quiz.selectBonusAnswer}
              onBack={quiz.goBack}
              showBack
              isBonus
            />
          </motion.div>
        )}

        {quiz.step === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ResultsScreen rawScore={quiz.rawScore} resultTier={quiz.resultTier} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
