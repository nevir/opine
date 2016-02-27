const opine = require('opine');

module.exports = class Node extends opine.Model(__dirname, 'node') {

  compose() {
    this.composeWith(require('./babel'));
  }

}
