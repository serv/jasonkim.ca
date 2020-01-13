import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Project from './Project';
import odiobooksImg from './images/odiobooks.png';
import justenoughImg from './images/justenough.png';
import h1bImg from './images/h1b.png';

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

const projects = [
  {
    name: 'Odiobooks',
    description:
      'Odiobooks allows you to listen to audiobooks and read the books at the same time.',
    url: 'https://odiobooks.com/',
    image: odiobooksImg
  },
  {
    name: 'H1BHub',
    description:
      'H1BHub is a data pipeline tool that provides you clean H1B data from 2014 to 2018 in local Postgresql database.',
    url: 'https://github.com/serv/h1bhub',
    image: h1bImg
  },

  {
    name: 'Just Enough Ruby To Get By',
    description:
      'Just Enough Ruby To Get By is a free programming book on Ruby.',
    url: 'http://jasonkim.ca/projects/just_enough_ruby_to_get_by/',
    image: justenoughImg
  }
];

export default function Projects() {
  const classes = useStyles();

  const projectsList = projects.map((p, index) => {
    return (
      <Project
        name={p.name}
        description={p.description}
        url={p.url}
        image={p.image}
        key={index}
      />
    );
  });

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

          {projectsList}
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </React.Fragment>
  );
}
