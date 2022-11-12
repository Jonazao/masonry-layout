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
      {['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'].map(
        (text, idx) => (
          <MasonryItem key={`tile_idx_${idx}`} number={idx}>
            {text}
          </MasonryItem>
        )
      )}
    </Box>
  );
}
