<script lang='ts'>
	import { onMount } from "svelte";
	import random from 'lodash.random';
	import { Jumper } from 'svelte-loading-spinners'
  import axios from 'axios';
  let loading: boolean = true;

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
	const reqOptions2 = {
    params: {
      method: 'flickr.photos.getSizes',
      api_key: '1370da634d18db3220f591212d9ad319',
      format: 'json',
      nojsoncallback: '1',
      photo_id: null
    }
	};
  const reqOptions3 = {
    params: {
      method: 'flickr.photos.getInfo',
      api_key: '1370da634d18db3220f591212d9ad319',
      format: 'json',
      nojsoncallback: '1',
      photo_id: null
    }
  };

  let source;
  let url;
  let title;
  let date;
	onMount(async () => {
    let res = await axios.get(reqUrl, reqOptions);
    const firstPhoto = res.data.photos.photo[random(0, res.data.photos.photo.length)];
    reqOptions2.params.photo_id = firstPhoto.id;
    reqOptions3.params.photo_id = firstPhoto.id;

    const promises = [
      axios.get(reqUrl, reqOptions2),
      axios.get(reqUrl, reqOptions3)
    ];
    let secondRes: Array<any> = await Promise.all(promises);

    let sizes = secondRes[0].data.sizes;
    let photo = secondRes[1].data.photo;

    source = sizes.size[9].source
    url = photo.urls.url[0]._content;
    title = photo.title._content;
    date = photo.dates.taken.split(' ')[0];
    loading = false;
	})
</script>

{#if loading}
  <div class='loading'>
    <Jumper size="70" color="#8c8c8c" unit="px" duration="1s"></Jumper>
  </div>
{:else}
  <div class='photo'>
    <a href={url}>
      <img src={source} />
    </a>
    <div class='photo-desc'>
      {title}<br />
      {date}
    </div>
  </div>

{/if}

<style>
  .loading {
    padding-top: 3em;
  }
  .photo {
    text-align: center;
  }
</style>