import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import ImgTimeSheet from '../../../../../../assets/product_1.png'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '50%'
  },
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const PurchaseRequisition = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Card elevation={6}>
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={ImgTimeSheet}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Purchase Requisition
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          Purchasing is a business or organization attempting to 
          acquire goods or services to accomplish its goals
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <NotificationsActiveIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              12 new
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
    </div>
  );
};

export default PurchaseRequisition;
