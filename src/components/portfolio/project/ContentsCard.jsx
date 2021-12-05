import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        {/* <h1>Todo List 앱</h1>
        <p>
          react와 mobx를 처음 배우고 만들었던 간단한 할일 목록 작성 사이트
          입니다.
        </p>
        <p>
          할일 목록 추가, 제거, 필터링 기능을 가지고 있으며 localStorage를
          활용하여 작성한 todo list의 데이터를 저장합니다.
        </p> */}
      </div>

      <Paper elevation={5}>
        <Card
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
          }}
        >
          <CardMedia
            component="img"
            image="/images/todolist.png"
            alt="green iguana"
            sx={{ width: 'unset' }}
          />
          <CardContent sx={{ position: 'relative' }}>
            <Typography gutterBottom variant="h5" component="div">
              Practice : Todo List
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a simple to-do list website developed after learning react
              and mobx for the first time. It has the ability to add, remove,
              and filter to-do lists. Save the data of the todo list created by
              utilizing localStorage.
            </Typography>
            <CardActions
              sx={{
                justifyContent: 'flex-end',
                bottom: 0,
                position: 'absolute',
                right: 0,
              }}
            >
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
}

export default ContentsCard;
