var React = require('react');
var Note = require('../util/Note');
var TONES = require('../constants/Tones');
var KeyStore = require('../stores/KeyStore');

var Key = React.createClass({
  _keysChanged: function() {
    var keys = KeyStore.all();
    if (keys.indexOf(this.props.noteName) !== -1) {
      this.note.start();
    } else {
      this.note.stop();
    }

  },

  componentDidMount: function() {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addListener(this._keysChanged);
  },

  componentWillUnmount: function() {
    KeyStore.removeListener(this._keysChanged);
  },

  render: function() {
    return (
      <div>
        {this.props.noteName}
      </div>
    );
  }
});

module.exports = Key;
