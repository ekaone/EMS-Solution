import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';


// components
import { 
  itemsApproval, 
  itemsMotors
} from './dataMock'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const ChipNotification = (props) => (
  <>
    <Chip 
      label={props.label} 
      color="primary"
      size="small"
      style={{ 
        fontSize: '11px', 
        height: '16px', 
        // width: '60px', 
        backgroundColor: props.color, 
      }} 
    />
  </>
)

export default function MuiListDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openMotors, setOpenMotors] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickMotors = () => {
    setOpenMotors(!openMotors);
  };

  return (
    <>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" style={{ textAlign: "center" }}>
            EMS mobile
          </ListSubheader>
        }
        className={classes.root}
      >
        <Divider/>
        <ListItem button component={Link} to={"/dashboard"}>
          <ListItemText primary="Home"/>
          <ChipNotification label={'99+ new'} color={'green'} />
        </ListItem>
        <ListItem button component={Link} to={"/dashboard/initiatework"}>
          <ListItemText primary="Initiate Work"/>
          <ChipNotification label={'8 new'} color={'brown'} />
        </ListItem>
        <ListItem button component={Link} to={"/dashboard/actionwork"}>
          <ListItemText primary="Work Order" />
          <ChipNotification label={'12 new'}  color={'grey'} />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Approval" />
          <ChipNotification label={'20 new'}  color={'red'} />
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {
            itemsApproval.map(item => (
              <List component="div" disablePadding key={item.id}>
                <ListItem button className={classes.nested} component={Link} to={item.path}>
                  <ListItemText primary={item.name} />
                </ListItem>
              </List>
            ))
          }
        </Collapse>
        <ListItem button onClick={handleClickMotors}>
          <ListItemText primary="Motors" />
          <ChipNotification label={'10 new'}  color={'yellow'} />
        </ListItem>
        <Collapse in={openMotors} timeout="auto" unmountOnExit>
          {
            itemsMotors.map(item => (
              <List component="div" disablePadding key={item.id}>
                <ListItem button className={classes.nested} component={Link} to={item.path}>
                  <ListItemText primary={item.name} />
                </ListItem>
              </List>
            ))
          }
        </Collapse>
      </List>
    </>
  );
}
