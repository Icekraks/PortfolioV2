"use client";

import { useEffect, useState } from "react";

const DEBUG_MODE = false;

const messages = [
  "Loading, please wait...",
  "Almost there...",
  "Fetching the data...",
  "Eating cheese...",
  "Hang tight...",
  "Preparing your experience...",
  "No Cheese Gromit...",
  "Luke, I am your father!",
  "Baking ice cream...",
  "You are number 2843684714 in the queue",
  "TODO: Insert elevator music",
  "How about this weather, eh?",
  "@todo Insert witty loading message",
  "Java developers never RIP. They just get Garbage Collected.",
  "Space is invisible mind dust, and stars are but wishes.",
  "May the forks be with you",
  "Convincing AI not to turn evil..",
];

const LoadingBarAnimation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState(messages[0]);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");
    if (!hasVisited || DEBUG_MODE) {
      setIsLoading(true);

      const handleClick = () => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
          localStorage.setItem("visited", "true");
        }, 1000);
      };

      document.addEventListener("click", handleClick);

      const cleanupMessages = setInterval(() => {
        setTooltipMessage(messages[Math.floor(Math.random() * messages.length)]);
      }, 1000);

      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
          localStorage.setItem("visited", "true");
        }, 1000);
      }, 8000);

      return () => {
        document.removeEventListener("click", handleClick);
        clearInterval(cleanupMessages);
        clearTimeout(timer);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loadingBarContainer ${isFadingOut ? "fadeOut" : ""}`}>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <h1 className="mb-8 text-4xl lg:text-6xl font-bold text-secondary">
          Felix Hu
        </h1>
        <div className="loadingContainer mb-2">
          <div className="loadingBar" />
        </div>
        <span className="loadingTooltip px-4 min-h-12">{tooltipMessage}</span>
        <div className="disclaimerLoading text-xs text-secondary">
          You can skip this animation by clicking anywhere on the screen.
        </div>
      </div>
    </div>
  );
};

export default LoadingBarAnimation;
