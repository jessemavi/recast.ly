class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      list: [],
    };
    this.searchable = true;

  }

  videoChange (vid) {
    console.log(vid);
    this.setState({
      currentVideo: vid
    });
  }

  searchInput () {
    console.log(this.searchable);
    if (this.searchable) { 
      var options = { q: $('input').val() };
      this.props.searchYouTube(options, function(videoArr) {
        this.setState({
          currentVideo: videoArr[0],
          list: videoArr
        });
        this.searchable = false;
        setTimeout(() => {
          console.log('setting true');
          this.searchable = true;
        }, 500);        
      }.bind(this));
    }
  }

  componentDidMount () {
    this.props.searchYouTube({}, function(videoArr) {
      this.setState({
        currentVideo: videoArr[0],
        list: videoArr
      });
    }.bind(this));
  }
  //this.videoChange.bind(this);
  // function(vid) {
  //   return this.videoChange(vid);
  // }.bind(this);
  render () {
    return (
      <div>
        <Nav inputListener={this.searchInput.bind(this)} />
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
