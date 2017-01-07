var searchYouTube = (options, callback) => {
  var params = options;

  var optionQuery = () => {
    return '?key=' + options.key + '&q=' + options.query + '&maxResults=' + options.max; 
  };

  $.ajax({
    //https://developers.google.com/youtube/v3/getting-started
    url: 'https://www.googleapis.com/youtube/v3/search' + optionQuery(),
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      callback();
      console.log(data, 'successfully receieved data');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('all bad');
    }
  });
};

window.searchYouTube = searchYouTube;
