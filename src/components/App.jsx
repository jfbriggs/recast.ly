class App extends React.Component {
  constructor(props) {
    super(props);
    
  
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData  
    };
    this.changeVideo = this.changeVideo.bind(this);
    this.search = this.search.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  componentWillMount() {
    var context = this;
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: 'lemurs', max: 10}, function(data) {
      console.log('inner data', data);
      context.setState({
        currentVideo: data[0],
        videoList: data  
      });       
    });
  }

  filterList(term) {
    //iterate thorugh current videolist
    var context = this;
    var newList = this.state.videoList.filter(function(video) {
      return video.snippet.title.toLowerCase().includes(term.toLowerCase());
    });

    this.setState({
      videoList: newList,  
      currentVideo: this.state.currentVideo
    });
    //update this.state.videoList to filtered list
  }   

  search (term) {
    var context = this;
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: term, max: 10}, function(data) {
      console.log('inner data', data);
      context.setState({
        currentVideo: data[0],
        videoList: data  
      });    
    });     
    this.render();
  }


  changeVideo (video) {
    this.setState({
      currentVideo: video
    });
    //might need to re render
    this.render();
  }

  // currently, we are re-rendering everything on app upon clicking, more efficient to just render 
  // the player

  render() {
    return (
      <div>
        <Nav search={this.search} filterList={this.filterList} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} changeVideo={this.changeVideo}/>
        </div>
      </div>
    );
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
