import React from 'react';
import MasonryItem from './MasonryItem';

import Box from '@mui/material/Box';

export default function MasonryContainer() {
  return (
    <Box
      sx={{
        display: 'grid',
        backgroundColor: 'gray',
        grid: 'auto-flow dense auto / 1fr 1fr',
        columnGap: '1rem',
        rowGap: '1rem',
        position: 'relative',
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((text, idx) => (
        <MasonryItem key={`tile_idx_${idx}`} number={idx} />
      ))}
    </Box>
  );
}
