import React, { useState } from 'react'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const brands = [
  {id: 1, value: 'Mitsubishi'},
  {id: 2, value: 'Fuso'},
  {id: 3, value: 'Suzuki'},
  {id: 4, value: 'Toyota'},
  {id: 5, value: 'Nissan'},
  {id: 6, value: 'Chevrolet'},
  {id: 7, value: 'MAN'},
  {id: 8, value: 'Hino'},
]

const models = [
  {id: 1, value: 'Terra'},
  {id: 2, value: 'X-Trail'},
  {id: 3, value: 'Ertiga'},
  {id: 4, value: 'Juke'},
  {id: 5, value: 'Camry Hybrid'},
  {id: 6, value: 'Avanza'},
  {id: 7, value: 'Altis'},
  {id: 8, value: 'Serena'},
]

const services = [
  {id: 1, value: '10.000 Km'},
  {id: 2, value: '20.000 Km'},
  {id: 3, value: '30.000 Km'},
  {id: 4, value: 'Lain-lain'},
]

const location = [
  {id: 1, value: 'Jl. Gerilya Timur No. 52 Kab Purwakarta, Jawa Barat' },
  {id: 2, value: 'Jl. Abdul Rahman Sales No. 32, Kota Bandung, Jawa Barat' },
  {id: 3, value: 'Jl. Soekarno Hatta No. 382, Kota Bandung, Jawa Barat' },
  {id: 4, value: 'Jl. Veteran No. 51, 55, 69, Kota Bandung, Jawa Barat' },
]

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
  }
}));

function Service() {
  const classes = useStyles();
  const [equipment, setEquipment] = useState('Toyota')
  const [mod, setMod] = useState('Avanza')
  const [serv, setServ] = useState('10.000 Km')
  const [loc, setLoc] = useState('')
  
  const handleChangeEquipment = event => {
    setEquipment(event.target.value)
  }

  const handleChangeLocation = event => {
    setLoc(event.target.value)
  }

  const handleChangeModel = event => {
    setMod(event.target.value)
  }

  const handleChangeService = event => {
    setServ(event.target.value)
  }

  return (
    <>
      <div style={{ padding: '7px' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField 
              className={classes.textField} 
              id="inp1" 
              label="Name" 
              variant="outlined"
              type="text" 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              className={classes.textField} 
              id="inp2" 
              label="Email" 
              variant="outlined" 
              type="text"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              className={classes.textField} 
              id="inp3" 
              label="Phone" 
              variant="outlined" 
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              className={classes.textField} 
              id="inp4" 
              label="Police Number" 
              variant="outlined" 
              type="text"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              className={classes.textField} 
              id="inp5" 
              label="Km" 
              variant="outlined" 
              type="text"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="brand"
              select
              label="Brand"
              className={classes.textField}
              value={equipment}
              onChange={handleChangeEquipment}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              variant="outlined"
              >
              {brands.map(option => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>   
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="model"
              select
              label="Model"
              className={classes.textField}
              value={mod}
              onChange={handleChangeModel}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              variant="outlined"
              >
              {models.map(option => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>   
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="datetime-local"
              label="Date appointment"
              type="datetime-local"
              defaultValue="2020-06-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined" 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="location"
              select
              label="Location"
              className={classes.textField}
              value={loc}
              onChange={handleChangeLocation}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              variant="outlined"
              >
              {location.map(option => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>   
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="service"
              select
              label="Service"
              className={classes.textField}
              value={serv}
              onChange={handleChangeService}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              variant="outlined"
              >
              {services.map(option => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>   
          </Grid>
          <Grid item xs={12}>
            <TextField 
              className={classes.textField} 
              id="note" 
              label="Note" 
              variant="outlined"
              type="text" 
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>Save</Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Service
