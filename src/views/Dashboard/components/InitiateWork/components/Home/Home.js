import React, { useState } from 'react'

// components
import { workOrderList } from './dataMock'
import DataView from './dataView'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

import EquipmentReference from './EquipmentReference'

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  header: {
    paddingTop: '10px'
  }
}));

function Home() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography className={classes.header} color="textPrimary" variant="h4" align="center" gutterBottom>Initiate Work</Typography>
      {
        workOrderList.map(wo => (
          <DataView
            key={wo.id} 
            number={wo.number}
            name={wo.name}
            defect={wo.defect}
            due={wo.due}
            color={ wo.id % 2 === 1 ? "primary" : "secondary" }
          />
        ))
      }
      <Fab className={classes.fab} color="primary" aria-label="add">
        <IconButton aria-label="add equipment" color="inherit" component="span" onClick={handleClickOpen}>
          <AddIcon style={{ fontSize: '35px' }} />
        </IconButton>
      </Fab>
      <EquipmentReference 
        open={open}
        handlerClickOpen={handleClickOpen}
        handlerClose={handleClose}
      />
    </>
  )
}

export default Home
