const opine = require('opine');

module.exports = class Babel extends opine.buildBlueprint(__dirname, 'babel') {

  compose() {
    this.composeWith(require('./base'));
  }

}
