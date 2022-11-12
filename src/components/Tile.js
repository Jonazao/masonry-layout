import React, { useMemo, useState } from 'react';
const defaultHeight = 150;
const expandedHeight = 450;
const colors = ['red', 'blue', 'yellow', 'magenta', 'green', 'lime', 'purple'];

export default function Tile({ itemRef, number, onHeightChange }) {
  const tileColor = useMemo(() => colors[number % 7], [number]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleHeightChange = () => {
    setIsExpanded(!isExpanded);
    onHeightChange();
  };

  return (
    <article
      ref={itemRef}
      style={{
        backgroundColor: tileColor,
        width: '100%',
        ...(isExpanded
          ? {
              height: expandedHeight * (1 + 0.25 * number),
              ...{ maxHeight: 'none', color: 'white' },
            }
          : { height: defaultHeight }),
      }}
      onClick={handleHeightChange}
    >
      {number}
    </article>
  );
}
