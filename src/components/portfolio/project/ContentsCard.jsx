import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function ContentsCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="contents-title">
        <h1>Todo List</h1>
        <p>할일 목록 작성</p>
      </div>

      <Paper
        elevation={5}
        sx={{
          width: '100%;',
          height: '15rem',
          maxWidth: '50rem',
        }}
      />
    </Box>
  );
}

export default ContentsCard;
