import React from 'react';
import {Box, Typography, Stack, CircularProgress} from '@mui/material';

export default function Error() {
  return (
    <>
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: 'lightblue',
          }}
        >
          <Stack direction="column" spacing={4} alignItems="center">
            <Typography variant="h2">Loading...</Typography>
            <CircularProgress sx={{ color: "primary" }} />
          </Stack>
        </Box>
      </>
  );
}

