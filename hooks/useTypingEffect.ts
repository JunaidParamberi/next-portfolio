// useTypingEffect.ts

'use client'
import { useState, useEffect } from "react";

// Random character set to choose from
const randomChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const useTypingEffect = (text: string, changeSpeed: number) => {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        let randomText = "";
        for (let i = 0; i < text.length; i++) {
          if (i <= index) {
            randomText += text[i]; // Add the correct character after it reaches the index
          } else {
            randomText +=
              randomChars[Math.floor(Math.random() * randomChars.length)]; // Add random character
          }
        }

        setDisplayText(randomText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, changeSpeed); // Adjust the change speed to control typing speed

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [text, changeSpeed]);

  return displayText;
};

export default useTypingEffect;
