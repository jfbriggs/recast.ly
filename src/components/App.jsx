// var App = (props) => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video ={props.videos[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={props.videos}/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.data = this.props.searchYouTube();
    //console.log(this.data);
    this.state = {
      currentVideo: exampleVideoData[0]
    };
    this.changeVideo = this.changeVideo.bind(this);
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
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} changeVideo={this.changeVideo}/>
        </div>
      </div>
    );
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
