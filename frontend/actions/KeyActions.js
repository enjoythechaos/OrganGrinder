var AppDispatcher = require('../dispatcher/Dispatcher'),
    TONES = require('../constants/Tones');

var KeyActions = {
  keyPressed: function(noteName) {
    AppDispatcher.dispatch({actionType: "ADD_KEY", noteName: noteName});
  },

  keyReleased: function(noteName) {
    AppDispatcher.dispatch({actionType: "REMOVE_KEY", noteName: noteName});
  },

  playChord: function(notes) {
    // notes.forEach(function(noteName){
    //   AppDispatcher.dispatch({actionType: "ADD_KEY", noteName: noteName});
    // });
    notes.forEach(function(note){
      AppDispatcher.dispatch({actionType: "ADD_KEY", noteName: note});
    });
    for (var noteName in TONES) {
      if (notes.indexOf(noteName) !== -1) {
        AppDispatcher.dispatch({actionType: "ADD_KEY", noteName: noteName});
      } else {
        AppDispatcher.dispatch({actionType: "REMOVE_KEY", noteName: noteName});
      }
    }
  }
};

module.exports = KeyActions;
