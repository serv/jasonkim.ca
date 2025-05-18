import queryString from 'query-string';
import Head from 'next/head';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import random from 'lodash.random';
import Promise from 'bluebird';
import axios from 'axios';

export default function Home() {
  const [image, setImage] = useState({
    loading: true,
  });

  useEffect(() => {
    const setupData = async () => {
      const reqUrl = 'https://api.flickr.com/services/rest/';
      const reqOptions = {
        params: {
          api_key: '1370da634d18db3220f591212d9ad319',
          format: 'json',
          nojsoncallback: '1',
          method: 'flickr.people.getPublicPhotos',
          user_id: '149839281@N05',
        },
      };

      // Fetch data from external API
      const res = await axios.get(reqUrl, reqOptions);
      const { data } = res;

      const firstPhoto = data.photos.photo[random(0, data.photos.photo.length)];
      const secondReqOptions = {
        params: {
          method: 'flickr.photos.getSizes',
          api_key: '1370da634d18db3220f591212d9ad319',
          format: 'json',
          nojsoncallback: '1',
          photo_id: firstPhoto.id,
        },
      };
      const photoInfoReqOptions = {
        params: {
          method: 'flickr.photos.getInfo',
          api_key: '1370da634d18db3220f591212d9ad319',
          format: 'json',
          nojsoncallback: '1',
          photo_id: firstPhoto.id,
        },
      };

      const res2 = await Promise.props({
        sizes: axios.get(reqUrl, secondReqOptions),
        info: axios.get(reqUrl, photoInfoReqOptions),
      });

      const sizes = res2.sizes;
      const info = res2.info;
      const imageUrl = info.data.photo.urls.url[0]._content;
      const imageTitle = info.data.photo.title._content;
      const imageDate = info.data.photo.dates.taken.split(' ')[0];
      setImage({
        source: sizes.data.sizes.size[9].source,
        url: imageUrl,
        title: imageTitle,
        date: imageDate,
        loading: false,
      });
    };

    setupData();
  }, []);

  return (
    <div className="container mx-auto flex justify-center">
      <Head>
        <title>Jason Kim</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8H0ES6XL5K"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
                      
              gtag('config', 'G-8H0ES6XL5K');`,
          }}
        />
      </Head>

      <main>
        <div className="text-gray-900 pt-8 pb-6">
          <div className="name whitespace-no-wrap flex items-center">
            <a
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider hover:underline mr-3"
              href="/"
            >
              Jason Kim
            </a>
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Open to Work</span>
          </div>
          <div className="blurb text-sm">
            Software engineer in Seattle, WA
            <br />
            Previously at Microsoft, Coupang and Napster
            <br />
          </div>
        </div>

        <div className="pb-6">
          {image.loading ? null : (
            <a href={image.url}>
              <img src={image.source} />
            </a>
          )}
          <div className="flex justify-between text-sm text-gray-600">
            <div>{image.title}</div>
            <div>{image.date}</div>
          </div>
        </div>

        <div className="flex justify-between pb-12 text-gray-900">
          <a className="hover:underline" href="http://blog.jasonkim.ca/">
            Blog
          </a>
          <Link href="/projects">
            <a className="hover:underline">Projects</a>
          </Link>
          <a className="hover:underline" href="https://github.com/serv/">
            Github
          </a>
          <a className="hover:underline" href="https://x.com/jasoki">
            X
          </a>
          <a
            className="hover:underline"
            href="https://docs.google.com/document/d/1J7Cs9EtZ2SE18aZmGHgIfL2Iqx7Hi7mwroXgGvmbiqw/edit"
          >
            Resume
          </a>
          <a className="hover:underline" href="mailto:me@jasonkim.ca">
            Email
          </a>
        </div>
      </main>
    </div>
  );
}
