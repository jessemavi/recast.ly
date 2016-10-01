class App extends React.Component {

  constructor (props) {
    super(props);
    
    this.state = {
      currentVideo: fakeVideoData[0],
      list: fakeVideoData
    };

  }

  videoChange (vid) {
    console.log(vid);
    this.setState({
      currentVideo: vid
    });
  }

  //this.videoChange.bind(this);
  // function(vid) {
  //   return this.videoChange(vid);
  // }.bind(this);
  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.list} appContextFunc={(vid) => this.videoChange(vid)}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
