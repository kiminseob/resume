import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDialog(props) {
  const { open, closeDialog } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={closeDialog}
        TransitionComponent={Transition}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="desktop"
      >
        <DialogTitle id="scroll-dialog-title">Practice: Todo List</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <Card
                sx={{
                  width: '50%',
                  height: '50%',
                }}
              >
                <CardMedia
                  component="img"
                  image="/images/todolist.gif"
                  alt="todolist"
                />
              </Card>
            </Box>

            <Typography variant="subtitle1" gutterBottom>
              This is a simple to-do list website developed after learning react
              and mobx for the first time. It has the ability to add, remove,
              and filter to-do lists. Save the data of the todo list created by
              utilizing localStorage.
            </Typography>
            <Typography variant="h6" gutterBottom align="left">
              feature
            </Typography>
            <Typography variant="body1" component="ul" gutterBottom>
              <li>
                - Adding todo Items to the todo list by typing them with the
                keyboard.
              </li>
              <li>
                - Change to complete state by clicking the checkbox of todo list
                (add completed class to li tag, added checked attribute to input
                tag).
              </li>
              <li>- Delete the element using the x button in the todo list.</li>
              <li>
                - Change to input mode when double-clicking todo list (add
                editing class to li tag) However, if you press esc key while
                editing is not completed, it returns to view mode without
                modification.
              </li>
              <li>
                - Show the number of items counted in todo list at the bottom of
                the list Check the status value of the todo list and show only
                the items in the status when you click the to-do or completed
                job
              </li>
              <li>
                - Storing data in localStorage to reflect the TodoItem&apos;s
                CRUD. Therefore, you should be able to check the saved data even
                after refreshing.
              </li>
            </Typography>
            <Typography
              component="a"
              variant="h6"
              href="https://kiminseob.github.io/react-todo-list-step1/"
            >
              Demo
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} autoFocus>
            x
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
