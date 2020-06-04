import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    height: 40,
    width: 40
  },
  icon: {
    height:29,
    width: 29
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const DataView = (props) => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
    <Card elevation={6}>
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              WO - {props.number}
            </Typography>
            <Typography variant="h6" wrap="true">{props.name}</Typography>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            {props.defect}
          </Typography>
          <Typography
            className={classes.caption}
            variant="caption"
          >
            {props.due}
          </Typography>
        </div>
      </CardContent>
    </Card>
    </div>
    </>
  );
};

export default DataView;
