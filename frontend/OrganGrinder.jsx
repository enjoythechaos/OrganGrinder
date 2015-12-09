var React = require('react'),
    ReactDOM = require('react-dom'),
    KeyListener = require('./util/KeyListener'),
    KeyStore = require('./stores/KeyStore'),
    Key = require('./components/Key');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Key noteName="C5"/>, document.getElementById('content'));
});
