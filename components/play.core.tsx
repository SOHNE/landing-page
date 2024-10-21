import React, { useRef, useEffect, memo } from 'react';
import { Fira_Code } from 'next/font/google';

const fira_code = Fira_Code({ subsets: ['latin'] });

interface PlayProps {
  name: string;
  program: any;
  delay?: number;
}

const Play: React.FC<PlayProps> = ({ name, program, delay = 100 }) => {
  const containerRef = useRef<HTMLPreElement>(null);

  const generateKey = (pre: string): string => {
    return `${pre}_${new Date().getTime()}`;
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const pre = document.createElement('pre');
    pre.className = "w-full h-full leading-none select-none overflow-hidden antialiased";
    containerRef.current.appendChild(pre);

    // Set up a timer to delay the import
    const timer = setTimeout(() => {
      // Dynamically import the run function after the delay
      import("@/modules/play.core/src/run.js").then(module => {
        const run = module.run;
        run(program, { element: pre })
          .then(() => { })
          .catch((e: Error) => {
            console.warn(e.message)
            console.log(e)
          });
      }).catch(error => {
        console.error("Error loading play.core module:", error);
      });
    }, delay);

    // Cleanup function to remove the pre element and clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
      if (containerRef.current) {
        containerRef.current.removeChild(pre);
      }
    };
  }, [program, delay]);

  return (
    <span
      key={generateKey(name)}
      ref={containerRef}
      className={`${fira_code.className} text-base absolute m-0 p-0 left-0 top-0 w-lvw h-lvh pointer-events-auto inset-0 z-0 whitespace-pre overflow-hidden break-normal leading-normal`}
    ></span>
  );
};

export default memo(Play);
