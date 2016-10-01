var searchYouTube = (options, callback) => {
  // TODO

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: $.extend({part: 'snippet, id'}, options),
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
  }

  );

};

window.searchYouTube = searchYouTube;






