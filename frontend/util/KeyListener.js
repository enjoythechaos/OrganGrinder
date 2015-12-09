var KeyActions = require('../actions/KeyActions');

var Mapping = {
  65: 'F4',
  87: 'F#4',
  83: 'G4',
  69: 'G#4',
  68: 'A4',
  82: 'A#4',
  70: 'B4',
  71: 'C5',
  89: 'C#5',
  72: 'D5',
  85: 'D#5',
  74: 'E5',
  75: 'F5',
  79: 'F#5',
  76: 'G5',
  80: 'G#5',
  186: 'A5',
  219: 'A#5',
  222: 'B5'
};

var _pressedKeys = [];

$(document).on('keydown', function (e) {
  var noteName = Mapping[e.keyCode];

  if (!(typeof noteName === "undefined") &&
        _pressedKeys.indexOf(noteName) === -1) {
    _pressedKeys.push(noteName);
    KeyActions.keyPressed(noteName);
  }
});

$(document).on('keyup', function (e) {
  var noteName = Mapping[e.keyCode];
  
  if (!(typeof noteName === "undefined")) {
    var idx = _pressedKeys.indexOf(noteName);
    _pressedKeys.splice(idx, 1);
    KeyActions.keyReleased(noteName);
  }
});
