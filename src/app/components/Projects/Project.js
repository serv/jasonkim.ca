import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '24px 0 24px 0'
  },
  typo: {
    fontFamily: 'Georgia, serif',
    textDecoration: 'none',
    color: 'grey'
  },
  mainImage: {
    width: 'auto',
    maxWidth: '100%'
  }
});

export default function Project({ url, name, description, image }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item sm={12} xs={12}>
          <Typography variant="h5" component="h5" align="left" gutterBottom>
            <a className={classes.typo} href={url}>
              {name}
            </a>
          </Typography>
        </Grid>
        <Grid item sm={12} xs={12}>
          <a href={url}>
            <img className={classes.mainImage} src={image} />
          </a>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Typography component="p" variant="body1" align="left" gutterBottom>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
