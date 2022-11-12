import React, { useState, useEffect, useRef } from 'react';
import Tile from './Tile';

export default function MasonryItem({ number }) {
  const defaultCardHeight = useRef(null);
  const itemRef = useRef(null);
  const [rowNumber, setRowNumber] = useState(0);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (itemRef?.current?.offsetHeight) {
      defaultCardHeight.current = itemRef?.current?.offsetHeight;
    }
  }, []);

  useEffect(() => {
    setRowNumber(
      Math.ceil(itemRef?.current?.offsetHeight / defaultCardHeight.current)
    );
  }, [trigger]);

  const handleHeightChange = () => {
    setTrigger(!trigger);
  };
  return (
    <article
      style={{
        display: 'flex',
        placeSelf: 'strech',
        gridRow: `span ${rowNumber}`,
      }}
    >
      <Tile
        itemRef={itemRef}
        number={number}
        onHeightChange={handleHeightChange}
      />
    </article>
  );
}
