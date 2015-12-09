var React = require('react'),
    Key = require('./Key'),
    TONES = require('../constants/Tones');

var Organ = React.createClass({
  render: function () {
    var keys = [];
    for (var noteName in TONES) {
      if (TONES.hasOwnProperty(noteName)) {
        keys.push(<Key key={noteName} noteName={noteName} />);
      }
    }

    return (
      <div>
        {keys}
      </div>
    );
  }
});

module.exports = Organ;
