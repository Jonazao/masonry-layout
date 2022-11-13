import React, { useState, useEffect, useRef, cloneElement } from 'react';
import Box from '@mui/material/Box';

export default function MasonryItem({ children }) {
  const defaultCardHeight = useRef(null);
  const itemRef = useRef(null);
  const [rowNumber, setRowNumber] = useState(0);

  useEffect(() => {
    if (itemRef?.current?.offsetHeight) {
      defaultCardHeight.current = itemRef?.current?.offsetHeight;
    }
  }, []);

  const handleHeightChange = () => {
    console.log(itemRef?.current?.offsetHeight);
    setRowNumber(
      Math.ceil(itemRef?.current?.offsetHeight / defaultCardHeight.current)
    );
  };

  if (children.length) {
    throw new Error('Wrap the children inside a container element');
  }

  return (
    <article
      style={{
        display: 'flex',
        placeSelf: 'strech',
        justifyContent: 'center',
        gridRow: `span ${rowNumber}`,
      }}
    >
      <Box>
        {cloneElement(children, {
          ...children.props,
          onHeightChange: handleHeightChange,
          itemRef: itemRef,
        })}
      </Box>
    </article>
  );
}
