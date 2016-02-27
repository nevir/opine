const opine = require('opine');

module.exports = class Web extends opine.Model(__dirname, 'web') {

  compose() {
    this.composeWith(require('./babel'));
  }

}
