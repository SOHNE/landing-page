import React, { FC, useState, useEffect } from 'react';
import "@/styles/GlyphButton.css";

interface GlyphButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  glyphs?: string;
  speed?: number;
}

const GLYPHS =
  'ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+AÀÁÃBCÇDEÈÉẼFGHIÍÌĨJKLMNOÓÒÕPQRSTUÚÙŨVWXYZ';

const GlyphButton: FC<GlyphButtonProps> = ({
  text,
  glyphs = GLYPHS,
  speed = 0.6,
  className = '',
  ...props
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      style={{ '--speed': speed } as React.CSSProperties}
      className={`glyph-button ${className}`}
      {...props}
    >
      <span className="glyph-button-content">
        {text.split('').map((char, index) => (
          <span
            key={`${char}-${index}`}
            data-char={char}
            style={mounted ? {
              '--index': index,
              '--char-1': `"${glyphs[Math.floor(Math.random() * glyphs.length)]}"`,
              '--char-2': `"${glyphs[Math.floor(Math.random() * glyphs.length)]}"`,
              '--char-3': `"${glyphs[Math.floor(Math.random() * glyphs.length)]}"`,
            } as React.CSSProperties : {}}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="sr-only">{text}</span>
    </button>
  );
};

export default GlyphButton;
