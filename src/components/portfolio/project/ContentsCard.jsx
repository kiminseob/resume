import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProjectDialog from './ProjectDialog';

const muiPaperStyle = (theme) => ({
  '&': {
    width: '80%',
    maxWidth: '60rem',
    '& > div': {
      width: '100%',
    },
    [theme.breakpoints.up('desktop')]: {
      height: '20rem',
      '& .MuiCardContent-root': {
        height: '85%',
      },
    },
    [theme.breakpoints.between('laptop', 'desktop')]: {
      height: '17rem',
      '& .MuiCardContent-root': {
        height: '85%',
      },
    },
    [theme.breakpoints.between('tablet', 'laptop')]: {
      height: '14rem',
      '& .MuiCardContent-root': {
        height: '70%',
      },
    },
    [theme.breakpoints.between('mobile', 'tablet')]: {
      height: 'fit',
      '& .MuiCardContent-root': {
        height: '90%',
      },
      '& .MuiCard-root': {
        flexDirection: 'column',
      },
      '& .MuiTypography-root': {
        marginBottom: '1rem',
      },
    },
  },
});

function ContentsCard() {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={5} sx={muiPaperStyle}>
          <Card
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              position: 'relative',
            }}
          >
            <CardMedia
              component="img"
              image="/images/todolist.png"
              alt="todolist"
              sx={{ objectFit: 'contain', width: 'unset' }}
            />
            <CardContent
              sx={{
                '&:last-child': { paddingBottom: '2.875rem' }, // 46px
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'clip',
                }}
              >
                Practice : Todo List
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ overflowY: 'auto', height: '100%' }}
              >
                This is a simple to-do list website developed after learning
                react and mobx for the first time. It has the ability to add,
                remove, and filter to-do lists. Save the data of the todo list
                created by utilizing localStorage.
              </Typography>
              <CardActions
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                }}
              >
                <Button size="small" onClick={openDialog}>
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Paper>
      </Box>
      <ProjectDialog open={open} closeDialog={closeDialog} />
    </>
  );
}

export default ContentsCard;
