import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';

// components
import { 
  Home,
  ActionWork,
  Approval,
  InitiateWork,
  Motors,
} from './components'

// components Approval
import { 
  Invoice,
  PurchaseRequisition,
  WorkOrder,
  Leaves,
  Timesheet,
  DeliveryOrder
} from './components/Approval/components'

// components Motors
import { 
  Automotive,
  Service
} from './components/Motors/components'

import Details from './components/Motors/components/Automotive/Details'
import Details2 from './components/Motors/components/Automotive/Details2'
import Details3 from './components/Motors/components/Automotive/Details3'

import MuiAppBar from './components/Mui/MuiAppBar'
import MuiListDrawer from './components/Mui/MuiListDrawer'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, true)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <MuiListDrawer />
    </div>
  );
  
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <MuiAppBar handlerClickMenu={toggleDrawer('left', true)} />
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
        <Switch>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/dashboard/approval" component={Approval} />
          <Route exact path="/dashboard/motors" component={Motors} />
          <Route exact path="/dashboard/motors/automotive/details" component={Details} />
          <Route exact path="/dashboard/motors/automotive/details2" component={Details2} />
          <Route exact path="/dashboard/motors/automotive/details3" component={Details3} />
          <Route path="/dashboard/motors/automotive" component={Automotive} />
          <Route path="/dashboard/motors/service" component={Service} />
          <Route path="/dashboard/actionwork" component={ActionWork} />
          <Route path="/dashboard/initiatework" component={InitiateWork} />
          <Route path="/dashboard/approval/purchasereq" component={PurchaseRequisition} />
          <Route path="/dashboard/approval/invoice" component={Invoice} />
          <Route path="/dashboard/approval/workorder" component={WorkOrder} />
          <Route path="/dashboard/approval/timesheet" component={Timesheet} />
          <Route path="/dashboard/approval/leaves" component={Leaves} />
          <Route path="/dashboard/approval/deliveryorder" component={DeliveryOrder} />
        </Switch>
      </Router>
    </>
  )
}