import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import { useStore } from 'utils';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Link({ name, to }) {
  return (
    <>
      {to && (
        <Typography
          component="a"
          variant="h6"
          href={to}
          sx={{ color: 'inherit', margin: '1rem 1rem 0 0' }}
        >
          {name}
        </Typography>
      )}
    </>
  );
}

function TypoItem({ title, contents }) {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Typography component="span" gutterBottom>
        {contents}
      </Typography>
    </>
  );
}

export default function ProjectDialog(props) {
  const { open, closeDialog, project } = props;
  const { title, gif, subtitle, feature, stack, demo, github } = project;
  const { GnbStore } = useStore();
  const theme = GnbStore.themeColor;

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
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: theme.portfolioBackgroundColor,
            color: theme.portfolioTxtColor,
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>
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
                image={`/images/${gif}`}
                alt="todolist"
              />
            </Card>
          </Box>

          <Typography variant="subtitle1" gutterBottom>
            {subtitle}
          </Typography>
          <Typography variant="h6" gutterBottom>
            feature
          </Typography>
          <Typography component="ul" gutterBottom>
            {feature.map((_feature) => (
              <li key={_feature}>{`- ${_feature}`}</li>
            ))}
          </Typography>
          <TypoItem title="stack" contents={stack} />
          <div
            style={{
              display: 'flex',
            }}
          >
            <Link name="Demo" to={demo} />
            <Link name="Github" to={github} />
          </div>
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
