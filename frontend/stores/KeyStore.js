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
  console.log('add');
  _keys.push(noteName);
  console.log(_keys);
  KeyStore.__emitChange();
};

var removeKey = function(noteName) {
  console.log('remove');
  var idx = _keys.indexOf(noteName);
  _keys.splice(idx, 1);
  console.log(_keys);
  KeyStore.__emitChange();
};

module.exports = KeyStore;
