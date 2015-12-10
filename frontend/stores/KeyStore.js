var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/Dispatcher'),
    TONES = require('../constants/Tones');

var KeyStore = new Store(AppDispatcher);

var _keys = [];

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "ADD_KEY":
      addKey(payload.noteName);
      break;
    case "REMOVE_KEY":
      removeKey(payload.noteName);
      break;
  }
};

var addKey = function(noteName) {
  _keys.push(noteName);
  KeyStore.__emitChange();
};

var removeKey = function(noteName) {
  var idx = _keys.indexOf(noteName);
  if (idx !== -1) {
    _keys.splice(idx, 1);
    KeyStore.__emitChange();
  }
};

module.exports = KeyStore;
