import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ViewDetails from './ViewDetails'
import Avanza from './avanzamerah.png'
import Alphard from './alphard.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 10
  },
}));

export default function Details2() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <center>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ViewDetails 
              avatar={'AP'}
              title={'Alphard'}
              price={'From Rp. 860.500.000'}
              image={Alphard}
            />
          </Grid>
          <Grid item xs={12}>
            <ViewDetails 
              avatar={'AV'}
              title={'Avanza'}
              price={'From Rp. 245.000.000'}
              image={Avanza}
            />
          </Grid>
        </Grid>
      </center>
    </div>
  )
}
