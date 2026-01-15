"use client";

import { useEffect, useState } from 'react';

const asciiArt = `
           .           .
         /' \         / \
        /   | .---.  |   \
       |    |/  _  \|    |
       |    |\   _  /|    |
        \   | '---'  |   /
         \./         \./
            |       |
            |       |
            |       |
           /         \
          |           |
`;

// A more complex face placeholder or just abstract shape
const heroAscii = `
      MATRIX_SYSTEM_ONLINE
      
      [CONNECTED]
      
        ..-""T-..
      ,'__   |   '.
     /   |   |    a
    :    |   |    :
    |    |   |    |
    :    |   |    :
     \   |   |    /
      '.__   |  .'
          ""-..-'
`;

// Let's use a simpler "Face" for now that looks a bit cool
const faceAscii = `
        /////////////////
      //               //
    //   _ .. --- .. _   //
   /   .' ._     _. '.   \
  |   /  /  \   /  \  \   |
  |  |   |  |   |  |   |  |
  |  |    \./   \./    |  |
  |  \        |        /  |
   \  '.      |      .'  /
    \   '._       _.'   /
     \     ''' '''     /
      \._           _./
         '''-----'''
`;

export default function AsciiCanvas() {
    const [art, setArt] = useState(faceAscii);

    // Simple glitch effect
    useEffect(() => {
        const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~';
        const interval = setInterval(() => {
            if (Math.random() > 0.9) {
                const originalLines = faceAscii.split('\n');
                const randomLineIndex = Math.floor(Math.random() * originalLines.length);
                const line = originalLines[randomLineIndex];
                if (!line) return;

                const randomCharIndex = Math.floor(Math.random() * line.length);
                const newChar = chars[Math.floor(Math.random() * chars.length)];

                const newLine = line.substring(0, randomCharIndex) + newChar + line.substring(randomCharIndex + 1);
                originalLines[randomLineIndex] = newLine;
                setArt(originalLines.join('\n'));

                // Reset quickly
                setTimeout(() => setArt(faceAscii), 150);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center my-8 select-none pointer-events-none opacity-80">
            <pre className="text-[10px] md:text-sm leading-[10px] md:leading-4 text-[var(--primary-color)] whitespace-pre terminal-glow">
                {art}
            </pre>
        </div>
    );
}
