import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Equipment from '../Equipment'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EquipmentReference(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog fullScreen open={props.open} onClose={props.handlerClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} color="inherit">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.handlerClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Equipment Reference
            </Typography>
          </Toolbar>
        </AppBar>
        <Equipment />
      </Dialog>
    </div>
  );
}
