import React from 'react'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ViewAutomotive from './ViewAutomotive'

import Mitsubhisi from './Mitsubishi.png'
import Fuso from './Fuso.png'
import Suzuki from './Suzuki.png'
import Toyota from './Toyota.png'
import Nissan from './Nissan.png'
import Chevrolet from './Chevrolet.png'
import Man from './Man.png'
import Hino from './Hino.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 10
  },
}));

export default function Automotive() {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = (d) => {
    switch (d) {
      case 'Mitsubhisi':
        console.log('Mitsubhisi')
        history.push('/dashboard/motors/automotive/details')
        break;
      case 'Toyota':
        history.push('/dashboard/motors/automotive/details2')
        console.log('Toyota')
        break;
      case 'Fuso':
        history.push('/dashboard/motors/automotive/details3')
        console.log('Fuso')
      break;
      default:
        break;
    }
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} onClick={() => handleClick('Mitsubhisi')}>
            <ViewAutomotive Image={Mitsubhisi} />
          </Grid>
          <Grid item xs={6} onClick={() => handleClick('Fuso')}>
            <ViewAutomotive Image={Fuso} />
          </Grid>
          <Grid item xs={6}>
            <ViewAutomotive Image={Suzuki} />
          </Grid>
          <Grid item xs={6} onClick={() => handleClick('Toyota')}>
            <ViewAutomotive Image={Toyota} />
          </Grid>
          <Grid item xs={6}>
            <ViewAutomotive Image={Nissan} />
          </Grid>
          <Grid item xs={6}>
            <ViewAutomotive Image={Chevrolet} />
          </Grid>
          <Grid item xs={6}>
            <ViewAutomotive Image={Man} />
          </Grid>
          <Grid item xs={6}>
            <ViewAutomotive Image={Hino} />
          </Grid>
        </Grid>
      </div>
    </>
  )
}
