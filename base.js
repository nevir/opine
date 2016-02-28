const opine = require('opine');

module.exports = class Base extends opine.buildBlueprint(__dirname, 'base') {

  extraContext() {
    return {
      nodeVersion: '4.3.1',
      npmVersion:  '3.7.5',
    };
  }

}
