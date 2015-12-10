var TONES = require('../constants/Tones');
var Note = require('../util/Note');
var KeyActions = require('../actions/KeyActions');

var Track = function(attrs) {
  this.name = attrs.name;
  if (typeof attrs.roll === 'undefined') {
    this.roll = [];
  } else {
    this.roll = attrs.roll;
  }

  this.keyboard = {};
  for(var noteName in TONES) {
    if(TONES.hasOwnProperty(noteName)) {
      this.keyboard[noteName] = new Note(TONES[noteName]);
    }
  }

};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.startTime = new Date();
};

Track.prototype.addNotes = function(notes) {
  var timeSlice = new Date() - this.startTime;
  this.roll.push({timeSlice: timeSlice, notes: notes});
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};

Track.prototype.play = function() {
  console.log(this.roll);
  if (typeof this.interval !== 'undefined') {
    return;
  }

  var playbackStartTime = Date.now();
  var currentNote = 0;
  var that = this;
  this.interval = setInterval(function(){
    console.log(currentNote);
    if (currentNote < that.roll.length) {
      if (Date.now() - playbackStartTime > that.roll[currentNote].timeSlice) {
        KeyActions.playChord(that.roll[currentNote].notes);
        currentNote++;
      }
    } else {
      KeyActions.playChord([]);
      clearInterval(that.interval);
      delete that.interval;
    }
  }, 10);
};

module.exports = Track;
