import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Tile from './Tile';
import Card from './Card';

export default function MasonryItem({ number }) {
  const defaultCardHeight = useRef(null);
  const maxCardHeight = useRef(null);
  const itemRef = useRef(null);
  const [rowNumber, setRowNumber] = useState(0);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (itemRef?.current?.offsetHeight) {
      defaultCardHeight.current = itemRef?.current?.offsetHeight;
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(itemRef?.current?.getBoundingClientRect().height);
      console.log(itemRef?.current?.offsetHeight);
      setRowNumber(
        Math.ceil(itemRef?.current?.offsetHeight / defaultCardHeight.current)
      );
    }, 500);
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
      <Card itemRef={itemRef} number={number} onHeightChange={handleHeightChange} />
    </article>
  );
}
