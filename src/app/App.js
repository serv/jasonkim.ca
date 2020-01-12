import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import random from 'lodash.random';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Promise from 'bluebird';

import Home from './components/Home';
import Projects from './components/Projects';

const theme = {
  spacing: 8
};
const useStyles = makeStyles({
  typo: {
    fontFamily: 'Georgia, serif',
    letterSpacing: '0.15em',
    textDecoration: 'none',
    color: 'grey'
  },
  app: {
    marginTop: theme.spacing * 6
  },
  mainImage: {
    width: 'auto',
    maxWidth: '100%'
  },
  photoGrid: {
    paddingTop: theme.spacing * 2,
    paddingBottom: theme.spacing * 2
  },
  progress: {
    width: '100%',
    justifyContent: 'center'
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.app}>
      <Grid item sm={2} />

      <Router>
        <Grid item sm={8} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                component="h2"
                align="center"
                gutterBottom
              >
                <Link className={classes.typo} to="/">
                  Jason Kim
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="p" align="center" gutterBottom>
                Software engineer working for Coupang in Seattle, WA
              </Typography>
            </Grid>
          </Grid>

          {/* the start of the content */}

          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          {/* The end of the content */}
        </Grid>
      </Router>

      <Grid item sm={2} />
    </Grid>
  );
}
