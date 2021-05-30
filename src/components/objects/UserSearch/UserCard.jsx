import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 453,
    maxWidth: 700,
    minWidth: 300,
    backgroundColor: "gray"
    
  },
  media: {
    height: 250,
    borderRadius: 400
  },
});

export default function MediaCard({data, repos}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.avatar_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Username: {data.login}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Repos: {repos.length}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}
