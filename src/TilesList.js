import React, { useMemo, useState } from 'react';
import './tiles.css';

const colors = ['red', 'blue', 'yellow', 'magenta', 'green', 'lime', 'purple'];

function Tile({ number, children, isExpanded, onExpand }) {
  const tileColor = useMemo(() => colors[number % 7], [number]);
  return (
    <article
      className={`tiles__tile ${isExpanded ? 'tiles__tile__expanded' : ''}`}
      style={{
        backgroundColor: tileColor,
        ...(isExpanded
          ? {
              gridRow: 'span 3',
            }
          : {}),
      }}
      onClick={() => onExpand(number)}
    >
      {children}
    </article>
  );
}

export default function TilesList() {
  const [expandedTile, setExpandedTile] = useState(-1);

  const handleTileExpanded = (number) => {
    if (number === expandedTile) {
      setExpandedTile(-1);
    } else {
      setExpandedTile(number);
    }
  };

  return (
    <div>
      <h2>Tiles!</h2>
      <section className="tiles__container">
        {['One', 'Two', 'Three', 'Four', 'Five'].map((text, idx) => (
          <Tile
            key={`tile_idx`}
            number={idx}
            onExpand={handleTileExpanded}
            isExpanded={idx === expandedTile}
          >
            {text}
          </Tile>
        ))}
      </section>
    </div>
  );
}
