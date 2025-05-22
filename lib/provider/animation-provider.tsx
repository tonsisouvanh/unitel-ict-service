"use client";
import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimationContextType = {
  registerAnimation: (id: string, ref: React.RefObject<HTMLElement>) => void;
  unregisterAnimation: (id: string) => void;
  isInView: (id: string) => boolean;
};

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [elements, setElements] = useState<
    Record<string, React.RefObject<HTMLElement>>
  >({});
  const [inViewElements, setInViewElements] = useState<Record<string, boolean>>(
    {}
  );

  const registerAnimation = (id: string, ref: React.RefObject<HTMLElement>) => {
    setElements((prev) => ({ ...prev, [id]: ref }));
  };

  const unregisterAnimation = (id: string) => {
    setElements((prev) => {
      const newElements = { ...prev };
      delete newElements[id];
      return newElements;
    });
    setInViewElements((prev) => {
      const newInViewElements = { ...prev };
      delete newInViewElements[id];
      return newInViewElements;
    });
  };

  const isInView = (id: string) => {
    return inViewElements[id] || false;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-animation-id");
          if (id) {
            setInViewElements((prev) => ({
              ...prev,
              [id]: entry.isIntersecting,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.entries(elements).forEach(([id, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-animation-id", id);
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [elements]);

  return (
    <AnimationContext.Provider
      value={{ registerAnimation, unregisterAnimation, isInView }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation(_id: string) {
  const context = useContext(AnimationContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }

  return { ref, inView };
}
