import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Project from './Project';
import odiobooksImg from './images/odiobooks.png';

const useStyles = makeStyles({
  typo: {
    fontFamily: 'Georgia, serif',
    textDecoration: 'none',
    color: 'grey'
  },

  root: {
    marginTop: 30
  }
});

export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item sm={2} />
        <Grid item sm={8} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                className={classes.typo}
                variant="h4"
                component="h4"
                align="center"
                gutterBottom
              >
                Projects
              </Typography>
            </Grid>
          </Grid>

          <Project image={odiobooksImg} />
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </React.Fragment>
  );
}
