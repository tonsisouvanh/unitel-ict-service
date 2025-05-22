"use client";
import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

export function TypewriterEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = "",
}: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentFullText = texts[currentTextIndex];

        if (!isDeleting) {
          // Typing
          if (currentText.length < currentFullText.length) {
            setCurrentText(
              currentFullText.substring(0, currentText.length + 1)
            );
            setIsBlinking(false);
          } else {
            // Finished typing
            setIsBlinking(true);
            setTimeout(() => {
              setIsDeleting(true);
              setIsBlinking(false);
            }, delayBetweenTexts);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          } else {
            // Finished deleting
            setIsDeleting(false);
            setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span
        className={`inline-block w-1 ml-1 bg-white ${
          isBlinking ? "animate-caret-blink" : ""
        }`}
      >
        &nbsp;
      </span>
    </span>
  );
}
