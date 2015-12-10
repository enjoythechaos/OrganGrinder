var React = require('react');
var Track = require('../util/Track');
var KeyStore = require('../stores/KeyStore');

var Recorder = React.createClass({
  getInitialState: function() {
    return({isRecording: false, track: new Track({name: "", roll: []})});
  },

  _keysChanged: function() {
    if (this.state.isRecording) {
      var keys = KeyStore.all();
      this.state.track.addNotes(keys);
      this.state.track.addNotes([]);
    }
  },

  componentDidMount: function() {
    KeyStore.addListener(this._keysChanged);
  },

  toggleRecording: function() {
    if (!this.state.isRecording) {
      this.state.track.startRecording();
    } else {
      this.state.track.stopRecording();
    }
    this.setState({isRecording: !this.state.isRecording});
    console.log(this.state.track.roll);
  },

  playBack: function() {
    this.state.track.play();
  },

  render: function() {
    var btnText = "Start";
    if (this.state.isRecording) {
      btnText = "Stop";
    }
    return (
      <div>
        <button onClick={this.toggleRecording}>{btnText}</button>
        <button onClick={this.playBack}>Play Back</button>
      </div>
    );
  }

});

module.exports = Recorder;
