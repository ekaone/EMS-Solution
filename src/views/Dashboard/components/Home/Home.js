import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TotalApproval from './components/TotalApproval'
import TotalInitiateWork from './components/TotalIniateWork'
import TotalWorkOrder from './components/TotalWorkOrder'
import ChartLatest from './components/ChartLatest'
import ChartComponent from './components/ChartComponent'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '5px'
  },
  content: {
    padding: '10px'
  }
}));

export default function Home() {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.root}>
        <div className={classes.content}>
          <TotalApproval />  
        </div>
        <div className={classes.content}>
          <TotalInitiateWork />
        </div>
        <div className={classes.content}>
          <TotalWorkOrder />
        </div>
        <div className={classes.content}>
          <ChartLatest />
        </div>
        <div className={classes.content}>
          <ChartComponent />
        </div>
      </div>
    </>
  )
}
