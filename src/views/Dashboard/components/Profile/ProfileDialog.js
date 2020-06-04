import React from 'react';

import moment from 'moment';

import Dialog from '@material-ui/core/Dialog';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import JohnDow from '../../../../assets/johnDow.jpg' 

const useStyles = makeStyles(theme => ({
  root: {
    padding: "15px",
  },
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    flexDirection: 'column',
    display: 'flex',
    margin: 'auto'
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  details: {
    display: 'flex'
  },
}));

const user = {
  city: 'Palembang',
  country: 'Indonesia',
  timezone: 'GMT-7',
};

export default function ProfileDialog(props) {
  const classes = useStyles();

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handlerClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      > 
      <div className={classes.root}>
        <Avatar alt="John Dow" src={JohnDow} className={classes.avatarLarge} />
        <DialogTitle id="alert-dialog-title"><center>Heru Priyanto</center></DialogTitle>
        <center>
        <Chip
          icon={<AccountCircleIcon style={{ color: '#f50057' }} />}
          label="Manage your account"
          clickable
          color="primary"
          variant="outlined"
        />
        </center>
        <p />
        <Divider />
        <DialogContent>
        <div style={{ textAlign: 'center' }}>
          <Typography
            className={classes.locationText}
            color="textSecondary"
            variant="body1"
          >
            {user.city}, {user.country}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {moment().format('hh:mm A')} ({user.timezone})
          </Typography>
        </div>
        <div className={classes.progress}>
          <Typography variant="overline">Profile Completeness: 70%</Typography>
          <LinearProgress
            value={70}
            variant="determinate"
          />
        </div>
        </DialogContent>
        <Divider />
        <p />
        <center>
        <Button 
          variant="outlined" 
          color="primary" 
          startIcon={<ExitToAppIcon color="secondary" />} 
          style={{ textTransform: 'none' }}
        >
          Signout 
        </Button>
        </center>
      </div>
      </Dialog>
    </>
  );
}
