var searchYouTube = (options, callback) => {
  var params = options;
  //var urlCheck = 'https://www.googleapis.com/youtube/v3/search' + optionQuery();

  

  var optionQuery = () => {
    return '?key=' + options.key + '&q=' + options.query + '&maxResults=' + options.max + '&type=video&part=snippet'; 
  };

  $.ajax({
    //https://developers.google.com/youtube/v3/getting-started
    url: 'https://www.googleapis.com/youtube/v3/search' + optionQuery(),
    type: 'GET',
    dataType: 'json', 
    success: function (data) {
      data = data.items;
      callback(data);
      console.log(data, 'successfully receieved data');
      //console.log(this.url);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('all bad');
    }
  });
};

window.searchYouTube = searchYouTube;
