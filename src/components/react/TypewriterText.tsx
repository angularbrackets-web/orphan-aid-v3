import { useState, useEffect, useRef } from "react";

const phrases = [
  "Nutritious Food",
  "Access to Education",
  "Essential Healthcare",
  "Safe and Stable Housing",
  "A Fair Opportunity in Life",
];

export function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const prefersReduced = useRef(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    // Cursor blink
    const cursorInterval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (prefersReduced.current) return;

    const current = phrases[phraseIndex];

    if (!isDeleting && displayed === current) {
      // Fully typed — pause then start deleting
      const pause = setTimeout(() => setIsDeleting(true), 1600);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      // Fully deleted — move to next phrase
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const delay = isDeleting ? 18 : 32;
    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  // Reduced motion fallback: just show current phrase without animation
  if (prefersReduced.current) {
    return <span className="text-[#e0cf56]">{phrases[phraseIndex]}</span>;
  }

  return (
    <span className="text-[#e0cf56]">
      {displayed}
      <span
        className="inline-block w-[2px] h-[1em] bg-[#e0cf56] ml-0.5 align-middle"
        style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
        aria-hidden="true"
      />
    </span>
  );
}
