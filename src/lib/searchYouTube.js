var searchYouTube = (options, callback) => {
  // TODO
  var defaultSearch = {
    part: 'snippet, id',
    videoEmbeddable: true,
    type: 'video',
    key: window.YOUTUBE_API_KEY,
    q: 'bees',
    maxResults: 7
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: $.extend(defaultSearch, options),
    dataType: 'json',
    success: function(data) {
      console.log('Success', data);
      callback(data.items);
    },
    error: function(data) {
      if (data) {
        console.log('error retrieving data: ', data.responseText);
      }
    }
  });
};

window.searchYouTube = searchYouTube;






