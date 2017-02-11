const Gapless5 = require('gapless5/gapless5');
const audioSample = require('file-loader!public/audio/pl_sample2.mp3');

const GIPHYKEY = 'dc6zaTOxFJmzC';
const GIPHYURL = 'http://api.giphy.com';
var path;
var background;
var xmlDoc;
var response;
var backgroundStyle;
var player = new Gapless5('gapless5-block', {
  tracks: [audioSample],
  loop: true,
  useHTML5Audio: false,
  useWebAudio: true
});

var ajax = {
  get: function(url, callback) {
    xmlDoc = new XMLHttpRequest();
    xmlDoc.open('GET', url, true);
    xmlDoc.onreadystatechange = function() {
      if (xmlDoc.readyState === 4 && xmlDoc.status === 200) {
        return callback(xmlDoc);
      }
    };

    xmlDoc.send();
  }
}
var helpers = {
  randomGiphyUrl: function(tag) {
    path = '/v1/gifs/random';
    return GIPHYURL + path + '?api_key=' + GIPHYKEY + '&tag=' + tag;
  },

  backgroundCss: function(url) {
    return 'background: url(' + url + ') no-repeat center center fixed';
  }
};

background = document.getElementsByTagName('body')[0];

ajax.get(helpers.randomGiphyUrl('dance'), function(data) {
  response = JSON.parse(data.response);
  backgroundStyle = helpers.backgroundCss(response.data.image_url);
  background.setAttribute('style', backgroundStyle);
});
