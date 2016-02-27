const opine = require('opine');

module.exports = class BabelReact extends opine.makeModel(__dirname, 'babel-react') {

  compose() {
    this.composeWith(require('./babel'));
  }

}
