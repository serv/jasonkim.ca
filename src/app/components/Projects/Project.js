import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {},
  mainImage: {
    width: 'auto',
    maxWidth: '100%'
  }
});

export default function Project({ image, name, description }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item sm={12} xs={12}>
          <a href={'https://odiobooks.com'}>
            <img className={classes.mainImage} src={image} />
          </a>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Typography component="p" variant="body1" align="center" gutterBottom>
            Odiobooks allows you to listen to audiobooks and read the books at
            the same time.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
