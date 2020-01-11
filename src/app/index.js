import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import random from 'lodash.random';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Promise from 'bluebird';

import Projects from './components/projects';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Georgia"'
  },
  spacing: {
    unit: 8
  }
});

const styles = theme => ({
  app: {
    marginTop: theme.spacing.unit * 6
  },
  mainImage: {
    width: 'auto',
    maxWidth: '100%'
  },
  photoGrid: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  progress: {
    width: '100%',
    justifyContent: 'center'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.state.imageLoading = true;
  }

  componentDidMount() {
    const reqUrl = 'https://api.flickr.com/services/rest/';
    const reqOptions = {
      params: {
        api_key: '1370da634d18db3220f591212d9ad319',
        format: 'json',
        nojsoncallback: '1',
        method: 'flickr.people.getPublicPhotos',
        user_id: '149839281@N05'
      }
    };

    axios
      .get(reqUrl, reqOptions)
      .then(res => {
        const firstPhoto =
          res.data.photos.photo[random(0, res.data.photos.photo.length)];
        const secondReqOptions = {
          params: {
            method: 'flickr.photos.getSizes',
            api_key: '1370da634d18db3220f591212d9ad319',
            format: 'json',
            nojsoncallback: '1',
            photo_id: firstPhoto.id
          }
        };
        const photoInfoReqOptions = {
          params: {
            method: 'flickr.photos.getInfo',
            api_key: '1370da634d18db3220f591212d9ad319',
            format: 'json',
            nojsoncallback: '1',
            photo_id: firstPhoto.id
          }
        };

        return Promise.props({
          sizes: axios.get(reqUrl, secondReqOptions),
          info: axios.get(reqUrl, photoInfoReqOptions)
        });
      })
      .then(result => {
        const sizes = result.sizes;
        const info = result.info;

        const imageUrl = info.data.photo.urls.url[0]._content;
        const imageTitle = info.data.photo.title._content;
        const imageDate = info.data.photo.dates.taken.split(' ')[0];

        return this.setState({
          imageSource: sizes.data.sizes.size[9].source,
          imageUrl,
          imageTitle,
          imageDate,
          imageLoading: false
        });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Grid container className={classes.app}>
          <Grid item sm={2} />
          <Grid item sm={8} xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  component="h2"
                  variant="display2"
                  align="center"
                  gutterBottom
                >
                  Jason Kim
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" align="center" gutterBottom>
                  Software engineer working for Coupang in Seattle, WA
                </Typography>
              </Grid>
            </Grid>

            {/* the start of the content */}
            <Router>
              <Switch>
                <Route path="/">
                  <Grid container className={classes.photoGrid}>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid
                          item
                          xs
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          {this.state.imageLoading ? (
                            <CircularProgress className={classes.progress} />
                          ) : (
                            <a href={this.state.imageUrl}>
                              <img
                                className={classes.mainImage}
                                src={this.state.imageSource}
                              />
                            </a>
                          )}
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid item xs={8}>
                          <Typography
                            component="p"
                            variant="caption"
                            gutterBottom
                          >
                            {this.state.imageTitle}
                          </Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography
                            component="p"
                            variant="caption"
                            align="right"
                            gutterBottom
                          >
                            {this.state.imageDate}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs>
                      <Typography
                        component="p"
                        variant="body1"
                        align="center"
                        gutterBottom
                      >
                        <a href="http://blog.jasonkim.ca/">Blog</a>
                      </Typography>
                      <Typography
                        component="p"
                        variant="body1"
                        align="center"
                        gutterBottom
                      >
                        <a href="https://github.com/serv/">Github</a>
                      </Typography>
                      <Typography
                        component="p"
                        variant="body1"
                        align="center"
                        gutterBottom
                      >
                        <a href="https://twitter.com/jasoki">Twitter</a>
                      </Typography>
                      <Typography
                        component="p"
                        variant="body1"
                        align="center"
                        gutterBottom
                      >
                        <a href="https://docs.google.com/document/d/1J7Cs9EtZ2SE18aZmGHgIfL2Iqx7Hi7mwroXgGvmbiqw/edit">
                          Resume
                        </a>
                      </Typography>
                      <Typography
                        component="p"
                        variant="body1"
                        align="center"
                        gutterBottom
                      >
                        <a href="mailto:me@jasonkim.ca">Email</a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Route>

                <Route path="/projects">
                  <Projects />
                </Route>
              </Switch>
            </Router>

            {/* The end of the content */}
          </Grid>
          <Grid item sm={2} />
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
