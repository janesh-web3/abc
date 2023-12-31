import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimCursor = () => {
  return (
    <AnimatedCursor
        innerSize={20}
      outerSize={40}
      color='0, 255, 155'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '9, 255, 0',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
  );
};

export default AnimCursor;

