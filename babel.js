const opine = require('opine');

module.exports = class Babel extends opine.makeModel(__dirname, 'babel') {

  compose() {
    this.composeWith(require('./base'));
  }

}
