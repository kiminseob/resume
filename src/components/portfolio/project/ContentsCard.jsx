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
    },
    [theme.breakpoints.between('laptop', 'desktop')]: {
      height: '17rem',
    },
    [theme.breakpoints.between('tablet', 'laptop')]: {
      height: '14rem',
    },
    [theme.breakpoints.between('mobile', 'tablet')]: {
      height: 'fit',

      '& .MuiCard-root': {
        flexDirection: 'column',
      },
      '& .MuiTypography-root': {
        marginBottom: '1rem',
      },
    },
  },
});

function ContentsCard({ project }) {
  const { title, image, subtitle } = project;
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
              height: '100%',
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
            }}
          >
            <CardMedia
              component="img"
              image={`/images/${image}`}
              alt="todolist"
              sx={{ objectFit: 'contain', width: 'unset' }}
            />
            <CardContent
              sx={{
                '&:last-child': { paddingBottom: '2.875rem' }, // 46px
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  '-webkit-box-orient': 'vertical',
                  '-webkit-line-clamp': '4',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {subtitle}
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
      <ProjectDialog open={open} closeDialog={closeDialog} project={project} />
    </>
  );
}

export default ContentsCard;
