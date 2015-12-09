var React = require('react'),
    ReactDOM = require('react-dom'),
    KeyListener = require('./util/KeyListener'),
    KeyStore = require('./stores/KeyStore'),
    Organ = require('./components/Organ');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Organ />, document.getElementById('content'));
});
