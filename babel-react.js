const opine = require('opine');

module.exports = class BabelReact extends opine.buildBlueprint(__dirname, 'babel-react') {

  compose() {
    this.composeWith(require('./babel'));
  }

}
