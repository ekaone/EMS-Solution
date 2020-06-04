import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LandingImage from './landingimage.jpg'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    objectFit: 'cover'
  }
}));

export default function ViewTop() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={LandingImage}
        title="Landing"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" align="center">
          PT Mitsubishi Motors Krama Yudha Sales Indonesia (MMKSI)
        </Typography>
      </CardContent>
    </Card>
  );
}
