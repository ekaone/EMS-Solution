import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import ProfileDialog from '../Profile/ProfileDialog'
import CompanyIcon from '../../../../components/Icons/IconCompany'
import JohnDow from '../../../../assets/johnDow.jpg' 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
}));

const styles = {
  appBar: {
    borderRadius: '5px'
  }
}

export default function MuiAppBar(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="inherit" style={styles.appBar}>
          <Toolbar>
            <IconButton onClick={props.handlerClickMenu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <CompanyIcon />
            <Typography variant="h6" className={classes.title}>
            Ems
            </Typography>
            <Button color="inherit" onClick={handleClickOpen}>
              <Avatar alt="Hohn Dow Sharp" src={JohnDow} />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <ProfileDialog 
        open={open}
        handlerClose={handleClose}
      />
    </>
  );
}
