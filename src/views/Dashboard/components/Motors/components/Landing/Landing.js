import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DriveEtaIcon from '@material-ui/icons/DriveEta';
import BuildIcon from '@material-ui/icons/Build';
import BusinessIcon from '@material-ui/icons/Business';
import FlagIcon from '@material-ui/icons/Flag';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HotelIcon from '@material-ui/icons/Hotel';
import CommuteIcon from '@material-ui/icons/Commute';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import GroupIcon from '@material-ui/icons/Group';
import DraftsIcon from '@material-ui/icons/Drafts';
import CallIcon from '@material-ui/icons/Call';

import ViewTop from './ViewTop'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 10
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Landing() {
  const classes = useStyles();
  const history = useHistory()

  const handleClick = (c) => {
    switch (c) {
      case 'Automotive':
        history.push('/dashboard/motors/automotive')
        break;
      case 'Service':
        history.push('/dashboard/motors/service')  
        break;
      default:
        break;
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ViewTop />
        </Grid>
        <Grid item xs={4} onClick={() => handleClick('Automotive')}>
          <Paper className={classes.paper}>
            <DriveEtaIcon style={{ fontSize: 40, color: 'green' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Automotive
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} onClick={() => handleClick('Service')}>
          <Paper className={classes.paper}>
            <BuildIcon style={{ fontSize: 40, color: 'black' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Service
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <BusinessIcon style={{ fontSize: 40, color: 'blue' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Dealers
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <FlagIcon style={{ fontSize: 40, color: 'black' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Test Drive
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <AccountTreeIcon style={{ fontSize: 40, color: 'purple' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Simulation
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <AnnouncementIcon style={{ fontSize: 40, color: 'brown' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              News
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <HotelIcon style={{ fontSize: 40, color: 'purple' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Hotels
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <CommuteIcon style={{ fontSize: 40, color: 'green' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Car Rental
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <LocalCarWashIcon style={{ fontSize: 40, color: 'orange' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Used Card
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <GroupIcon style={{ fontSize: 40, color: 'black' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Groups
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <DraftsIcon style={{ fontSize: 40, color: 'grey' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Contact Us
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <CallIcon style={{ fontSize: 40, color: 'red' }} />
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              Call Center
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
