import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import MitsubishiExpander from './xpander.png'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ViewDetails(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.price}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Car"
        style={{ backgroundSize: '380px 180px', backgroundRepeat: 'no-repeat' }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Nikmati pengalaman berkendara terbaik 
          di mana pun medannya, berkat performa tangguh hasil kombinasi mesin MIVEC 1.5 L
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="h4">Next Generation:</Typography>
          <Typography paragraph>
            Desain mewah dilengkapi material interior terbaik yang digunakan di 
            tiap sudut Mitsubishi Xpander, membuatnya tampak berkelas dan nyaman untuk seluruh 
            keluarga, tersedia 2 pilihan warna interior.
          </Typography>
          <Typography paragraph variant="h4">Interior Mewah & Nyaman:</Typography>
          <Typography paragraph>
            Kenyamanan berkendara dan kemewahan jadi hal pokok yang selalu diimpikan keluarga Indonesia. 
            Mitsubishi Xpander hadir dengan kabin luas dipadu pilihan material dan desain interior layaknya MPV kelas atas
          </Typography>
          <Typography>
            Kenyamanan berkendara dan kemewahan jadi hal pokok yang selalu diimpikan keluarga Indonesia.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
