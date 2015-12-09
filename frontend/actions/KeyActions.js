var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function(noteName) {
    AppDispatcher.dispatch({actionType: "ADD_KEY", noteName: noteName});
  },

  keyReleased: function(noteName) {
    AppDispatcher.dispatch({actionType: "REMOVE_KEY", noteName: noteName});
  }
};

module.exports = KeyActions;
