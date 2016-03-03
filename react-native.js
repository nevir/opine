const opine = require('opine');

module.exports = class ReactNative extends opine.buildBlueprint(__dirname, 'react-native') {

  compose() {
    this.composeWith(require('./babel-react'));
  }

}
