const opine = require('opine');

module.exports = class BabelNode extends opine.Model(__dirname, 'babel-node') {

  compose() {
    this.composeWith(require('./babel'));
  }

}
