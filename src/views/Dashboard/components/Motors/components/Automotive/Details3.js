import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ViewDetails from './ViewDetails'
import Fuso1 from './fuso1.png'
import Fuso2 from './fuso2.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 10
  },
}));

export default function Details3() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <center>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ViewDetails 
              avatar={'CF'}
              title={'Colt Diesel FE-71'}
              price={'From Rp. 540.000.000'}
              image={Fuso1}
            />
          </Grid>
          <Grid item xs={12}>
            <ViewDetails 
              avatar={'CD'}
              title={'Colt Diesel Deck'}
              price={'From Rp. 305.000.000'}
              image={Fuso2}
            />
          </Grid>
        </Grid>
      </center>
    </div>
  )
}
