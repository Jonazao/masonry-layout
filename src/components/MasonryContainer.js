import React from 'react';
import Box from '@mui/material/Box';
import MasonryItem from './MasonryItem';

import Card from './Card';

export default function MasonryContainer() {
  return (
    <Box
      sx={{
        display: 'inline-grid',
        backgroundColor: 'gray',
        grid: 'auto-flow dense auto / 1fr 1fr',
        columnGap: '1rem',
        rowGap: '1rem',
        position: 'relative',
      }}
    >
      {[
        'Magnificente Masonry',
        'New UI layers by Jonas',
        'Welcome to advanced React',
        'Expand and have fun',
        'Some cool items',
        'Jonas is the best ;)',
        'More does not mean better',
        'Just go and do it',
      ].map((text, idx) => (
        <MasonryItem key={`tile_idx_${idx}`}>
          <Card title={text} />
        </MasonryItem>
      ))}
    </Box>
  );
}
