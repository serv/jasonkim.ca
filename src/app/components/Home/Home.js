import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import random from 'lodash.random';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Promise from 'bluebird';

const theme = {
  spacing: 8
};
const useStyles = makeStyles({
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

export default function Home() {
  const classes = useStyles();
  const [image, setImage] = useState({
    loading: true
  });

  useEffect(() => {
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

    return axios
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

        return setImage({
          source: sizes.data.sizes.size[9].source,
          url: imageUrl,
          title: imageTitle,
          date: imageDate,
          loading: false
        });
      });
  });

  return (
    <React.Fragment>
      <Grid container className={classes.photoGrid}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs style={{ display: 'flex', justifyContent: 'center' }}>
              {image.loading ? (
                <CircularProgress className={classes.progress} />
              ) : (
                <a href={image.url}>
                  <img className={classes.mainImage} src={image.source} />
                </a>
              )}
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={8}>
              <Typography component="p" variant="caption" gutterBottom>
                {image.title}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography
                component="p"
                variant="caption"
                align="right"
                gutterBottom
              >
                {image.date}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs>
          <Typography component="p" variant="body1" align="center" gutterBottom>
            <a href="http://blog.jasonkim.ca/">Blog</a>
          </Typography>
          <Typography component="p" variant="body1" align="center" gutterBottom>
            <a href="https://github.com/serv/">Github</a>
          </Typography>
          <Typography component="p" variant="body1" align="center" gutterBottom>
            <a href="https://twitter.com/jasoki">Twitter</a>
          </Typography>
          <Typography component="p" variant="body1" align="center" gutterBottom>
            <a href="https://docs.google.com/document/d/1J7Cs9EtZ2SE18aZmGHgIfL2Iqx7Hi7mwroXgGvmbiqw/edit">
              Resume
            </a>
          </Typography>
          <Typography component="p" variant="body1" align="center" gutterBottom>
            <a href="mailto:me@jasonkim.ca">Email</a>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
