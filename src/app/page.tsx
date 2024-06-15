"use client";
import styles from "./index.module.css";
import Link from "next/link";

const BACKGROUND_CHARACTERS = " *,      ./0!8#X~;$\\}%".replaceAll(
  " ",
  "\u00A0"
);

const Home = () => {
  return (
    <main
      className={`${styles.container} relative leading-normal pl-[2ch] pt-[1lh] pr-[2ch] sm:pt-[2lh] sm:pl-[7ch] min-h-[100dvh] pb-[1lh] overflow-hidden`}
      id="new"
      style={
        {
          "--animation-delay-step": "90ms",
        } as CSSProperties
      }
    >
      <Background />

      <h1
        className="bg-white animate-textFade"
        style={{
          animationDelay: `calc(1 * var(--animation-delay-step))`,
        }}
      >
        sanzhar abduraimov
      </h1>
      <p
        className="block bg-white animate-textFade"
        style={{
          animationDelay: `calc(2 * var(--animation-delay-step))`,
        }}
      >
        astana, kz
      </p>

      <h2
        className="font-bold mt-[2lh] sm:mt-[3lh] bg-white animate-textFade"
        style={{
          animationDelay: `calc(3 * var(--animation-delay-step))`,
        }}
      >
        today
      </h2>
      <p
        className="mt-[0lh] relative animate-textFade"
        style={{
          animationDelay: `calc(4 * var(--animation-delay-step))`,
        }}
      >
        <TextBackground
          text="i am doing an internship at yandex as interfaces builder and 
        studying computer science at nazarbayev university."
        />
        i am doing an internship at <a href="https://yandex.com">yandex</a> as
        interfaces builder and studying computer science at{" "}
        <a href="https://nu.edu.kz">nazarbayev university</a>. currently
        obsessed with semiconductors and computer architecture.
      </p>

      <p
        className="mt-[1lh] animate-textFade"
        style={{
          animationDelay: `calc(5 * var(--animation-delay-step))`,
        }}
      >
        tech stack: react, next.js, redux, effector, js, ts or anything else if
        you give me time to learn.
      </p>

      <h2
        className="font-bold mt-[2lh] bg-white animate-textFade"
        style={{
          animationDelay: `calc(6 * var(--animation-delay-step))`,
        }}
      >
        favourite quote
      </h2>

      <p
        className="animate-textFade"
        style={{
          animationDelay: `calc(7 * var(--animation-delay-step))`,
        }}
      >
        <TextBackground text="what the hell is work-life-balance, you should have work-work-balance." />
        what the hell is work-life-balance, you should have work-work-balance.
      </p>

      <h2
        className="font-bold mt-[2lh] animate-textFade"
        style={{
          animationDelay: `calc(8 * var(--animation-delay-step))`,
        }}
      >
        links
      </h2>
      <ul>
        <li
          className="animate-textFade"
          style={{
            animationDelay: `calc(11 * var(--animation-delay-step))`,
          }}
        >
          <Link href="https://github.com/sanxzhar" className="bg-white">
            github
          </Link>
        </li>
        <li
          className="animate-textFade"
          style={{
            animationDelay: `calc(9 * var(--animation-delay-step))`,
          }}
        >
          <a href="https://x.com/sanxzhar" className="bg-white">
            twitter/x
          </a>
        </li>
        <li
          className="animate-textFade"
          style={{
            animationDelay: `calc(10 * var(--animation-delay-step))`,
          }}
        >
          <a href="mailto:sanxzhar@gmail.com" className="bg-white">
            email
          </a>
        </li>
      </ul>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio src="/bg.mp3"></audio>
    </main>
  );
};

const CHARACTER_WIDTH = 9.6;
const CHARACTER_HEIGHT = 24;

const Background = () => {
  const [render, setRender] = useState(false);
  const [backgroundCharacters, setBackgroundCharacters] = useState<string[]>(
    []
  );

  /**
   * Calculate the background characters based on the viewport dimensions.
   *
   * This function is debounced to prevent excessive re-calculations.
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateBackground = useCallback(
    debounce(() => {
      // Get the current viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate the number of characters needed based on the viewport width and height
      const charactersNeededWidth = Math.ceil(viewportWidth / CHARACTER_WIDTH);
      const charactersNeededHeight = Math.ceil(
        viewportHeight / CHARACTER_HEIGHT
      );
      const numberOfCharactersNeeded =
        charactersNeededWidth * charactersNeededHeight;

      // Generate an array of random background characters
      setBackgroundCharacters(
        Array.from({ length: numberOfCharactersNeeded }).map(
          () =>
            BACKGROUND_CHARACTERS[
              Math.floor(Math.random() * BACKGROUND_CHARACTERS.length)
            ]
        )
      );
    }, 300),
    []
  );

  useEffect(() => {
    if ("document" in window) {
      setRender(true);
      calculateBackground();
    }
  }, [calculateBackground]);

  useEffect(() => {
    const handleResize = () => {
      calculateBackground();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateBackground]);

  if (!render) {
    return null;
  }

  return (
    <div
      className="text-[#F2F2F2] absolute inset-0 break-words select-none animate-fade font-normal opacity-0 contain-strict"
      aria-hidden
      id="background"
      style={{
        animationDelay: "1s",
      }}
    >
      {backgroundCharacters.map((char, index) => (
        <Character value={char} key={index} />
      ))}
    </div>
  );
};

export default Home;

const Character = ({ value }: { value: string }) => {
  const noise = useRef(Math.floor(Math.random() * 1500) + 500);
  const ref = useRef<HTMLSpanElement>(null);

  useInterval(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (Math.random() < 0.01) {
      if (ref.current) {
        ref.current.animate(
          [{ color: "#F2F2F2" }, { color: "#C9C9C9" }, { color: "#F2F2F2" }],
          {
            duration: 1000,
            easing: "linear",
          }
        );
      }
    }
  }, noise.current);

  return (
    <span
      className="hover:text-black/50 hover:duration-0 duration-[0.8s] transition-[background-color,color]"
      ref={ref}
    >
      {value}
    </span>
  );
};

import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (delay === null) {
      return;
    }

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const TextBackground = ({ text }: { text: string }) => {
  return (
    <span
      className="absolute top-0 left-0 w-full pointer-events-none select-none -z-10 touch-none"
      aria-hidden
    >
      <span
        className="text-white bg-white"
        style={{
          overflowWrap: "anywhere",
        }}
      >
        {text}
      </span>
    </span>
  );
};

function debounce(func: () => void, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      // @ts-expect-error
      func(...args);
    }, delay);
  };
}
