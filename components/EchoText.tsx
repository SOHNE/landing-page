import React, { useState, Children, cloneElement, FC, ReactNode, useMemo } from 'react';
import { motion } from 'framer-motion';

interface EchoTextProps extends React.ComponentPropsWithoutRef<'a'> {
  children: ReactNode;
  numberOfEchoes?: number;  // Number of echoes
  echoDirection?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';  // Direction of echoes
}

const EchoText: FC<EchoTextProps> = React.memo(({
  children,
  className,
  numberOfEchoes = 3,
  echoDirection = 'bottom-right',  // Default to bottom-right echoes
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoize the direction offsets to prevent recalculating every render
  const getDirectionOffsets = useMemo(() => {
    return (index: number) => {
      switch (echoDirection) {
        case 'top-left':
          return { x: -index * numberOfEchoes, y: -index * 3 };
        case 'top-right':
          return { x: index * 3, y: -index * 3 };
        case 'bottom-left':
          return { x: -index * 3, y: index * 3 };
        case 'bottom-right':
        default:
          return { x: index * 3, y: index * 3 };
      }
    };
  }, [echoDirection]);

  // Memoize the echo rendering to avoid unnecessary recalculations
  const echoes = useMemo(() => {
    const echoElements = [];
    for (let i = 1; i <= numberOfEchoes; i++) {
      const { x, y } = getDirectionOffsets(i);
      echoElements.push(
        <motion.div
          key={i}
          className="absolute flex items-center"
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={isHovered ? { opacity: 0.7 - i * 0.2, x, y } : { opacity: 0, x: 0, y: 0 }}
          transition={{ duration: 0.3 + i * 0.1 }}
        >
          {Children.map(children, (child) =>
            cloneElement(child as React.ReactElement, {
              className: `${(child as React.ReactElement).props.className || ''} text-gray-${900 - i * 100}/${100 - i * 50}`,
              style: { zIndex: -i },  // Ensure echoes are behind the main content
            })
          )}
        </motion.div>
      );
    }
    return echoElements;
  }, [children, getDirectionOffsets, isHovered, numberOfEchoes]);

  return (
    <div className="relative">
      <a
        className={`text-2xl font-bold flex items-center ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Main content (front-most, above echoes) */}
        <div className="relative flex items-center" style={{ zIndex: numberOfEchoes + 1 }}>
          {children}
        </div>

        {/* Render all echoes */}
        {echoes}
      </a>
    </div>
  );
});

export default EchoText;

