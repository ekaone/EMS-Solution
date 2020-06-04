import React, { useState } from 'react'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const workOrderStatus = [
  {id: 1, value: '00001 Mechanical Failure Mode'},
  {id: 2, value: '00002 Electrical Failure Mode'},
  {id: 3, value: '00003 Control/Login Failure Mode'},
  {id: 4, value: '00004 Instrument Failure Mode'},
  {id: 5, value: '00005 Operational Failure Mode'},
  {id: 6, value: '01 FACTORY DEFFECTIVE'},
  {id: 7, value: '02 MAINTENANCE ERROR'},
  {id: 8, value: '03 OPERATION ERROR'},
  {id: 9, value: '04 ENVIRONMENT INFLUENCE'},
  {id: 10, value: '05 NORMAL DEFFECTIVE'},
  {id: 11, value: '06 DOWN BY SERVICE PROG'},
]

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
  }
}));

function Equipment() {
  const classes = useStyles();
  const [equipment, setEquipment] = useState('01 FACTORY DEFFECTIVE')
  const [value, setValue] = useState('EX250-0003 EXCAVATOR KOMATSUPC3000-6')
  
  const handleChangeEquipment = event => {
    setEquipment(event.target.value)
  }

  const handleChangeWo = event => {
    setValue(event.target.value)
  }

  return (
    <>
      <br />
        <div style={{ padding: '7px' }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField 
                className={classes.textField} 
                value={value} 
                id="outlined-basic" 
                label="Equipment Reference" 
                variant="outlined" 
                onChange={handleChangeWo}
                helperText="Equipment most commonly refers to a set of tools"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-select-wo-status"
                select
                label="WO Status"
                className={classes.textField}
                value={equipment}
                onChange={handleChangeEquipment}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                variant="outlined"
                helperText="A work order is usually a task or a job for a customer"
              >
              {workOrderStatus.map(option => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>   
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">Save</Button>
            </Grid>
          </Grid>
        </div>
    </>
  )
}

export default Equipment
