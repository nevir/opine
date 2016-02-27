const opine = require('opine');

module.exports = class Node extends opine.Model(__dirname, 'web') {

  compose() {
    this.composeWith(require('./base'));
  }

}
