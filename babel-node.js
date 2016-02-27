const opine = require('opine');

module.exports = class BabelNode extends opine.makeModel(__dirname, 'babel-node') {

  compose() {
    this.composeWith(require('./babel'));
  }

}
