const opine = require('opine');

module.exports = class Babel extends opine.Model(__dirname, 'babel') {

  compose() {
    this.composeWith(require('./base'));
  }

}
