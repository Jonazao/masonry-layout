import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Card from './Card';

export default function MasonryItem({ number }) {
  const defaultCardHeight = useRef(null);
  const itemRef = useRef(null);
  const [rowNumber, setRowNumber] = useState(0);

  useEffect(() => {
    if (itemRef?.current?.offsetHeight) {
      defaultCardHeight.current = itemRef?.current?.offsetHeight;
    }
  }, []);

  const handleHeightChange = () => {
    setTimeout(() => {
      setRowNumber(
        Math.ceil(itemRef?.current?.offsetHeight / defaultCardHeight.current)
      );
      //This is the transition time between the card being collapsed and expanded. Maybe there is a way to wait for the UI to fully render before gattering this info (Also this value is on the theme from the material UI)
    }, 500);
  };

  return (
    <article
      style={{
        display: 'flex',
        placeSelf: 'strech',
        justifyContent:'center',
        gridRow: `span ${rowNumber}`,
      }}
    >
      <Box>
        <Card
          itemRef={itemRef}
          number={number}
          onHeightChange={handleHeightChange}
        />
      </Box>
    </article>
  );
}
