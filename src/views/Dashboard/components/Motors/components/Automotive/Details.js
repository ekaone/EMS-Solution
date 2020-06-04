import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ViewDetails from './ViewDetails'
import MitsubishiExpander from './xpander.png'
import PajeroSport from './pajero-rf.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 10
  },
}));

export default function Details() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <center>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ViewDetails 
              avatar={'XP'}
              title={'Xpander'}
              price={'From Rp. 260.000.000'}
              image={MitsubishiExpander}
            />
          </Grid>
          <Grid item xs={12}>
            <ViewDetails 
              avatar={'PS'}
              title={'Pajero Sport'}
              price={'From Rp. 495.000.000'}
              image={PajeroSport}
            />
          </Grid>
        </Grid>
      </center>
    </div>
  )
}
