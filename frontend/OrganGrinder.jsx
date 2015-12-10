var React = require('react'),
    ReactDOM = require('react-dom'),
    KeyListener = require('./util/KeyListener'),
    KeyStore = require('./stores/KeyStore'),
    Organ = require('./components/Organ'),
    Recorder = require('./components/Recorder');


var Entry = React.createClass({
  render: function () {
    return(
      <div>
        <Organ />
        <Recorder />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Entry />, document.getElementById('content'));
});
