const opine = require('opine');

module.exports = class BabelReact extends opine.Model(__dirname, 'babel-react') {

  compose() {
    this.composeWith(require('./babel'));
  }

}
