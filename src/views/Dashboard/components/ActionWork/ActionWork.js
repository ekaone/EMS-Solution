import React from 'react'
// import { 
//   useHistory  
// } from 'react-router-dom'

// @material-ui/core
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// components unit
import { Items } from './dataMock'
import DataView from './dataView'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingTop: '10px'
  }
}));

export default function ActionWork() {
  const classes = useStyles();
  // const history = useHistory();

  // const handleClick = (id) => {
  //   const item = Items.find(itm => itm.id === id)
  //   // console.log("Data: ", item)
  //   history.push("/page-tasks/" + item.id)
  // }

  const vTasks = (
    <>
      <div className={classes.root}>
      <Typography className={classes.header} color="textPrimary" variant="h4" align="center">Work Order</Typography>
        <Grid container style={{ padding: '7px' }}>
          {
            Items.map(item => (
              <Grid 
                key={item.id} 
                item xs={12}
                // onClick={() => handleClick(item.id)}
              >
                <DataView 
                  workOrderNumber={item.workOrderNumber}
                  workOrderAction={item.workOrderAction}
                  taskNumber={item.taskNumber}
                  taskAction={item.taskAction}
                  equipmentNumber={item.equipmentNumber}
                  equipmentAction={item.equipmentAction}
                />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </>
  )

  return (
    <>
      {vTasks}
    </>
  )
}
