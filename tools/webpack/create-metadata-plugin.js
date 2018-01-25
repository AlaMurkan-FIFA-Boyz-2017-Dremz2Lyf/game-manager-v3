function CreateMetadataPlugin(options) {}

CreateMetadataPlugin.prototype.apply = function apply(compiler) {
  compiler.plugin('emit', (compilation, callback) => {
    const rawMetadata = require('../../micro-app.json');
    const transformedMetadata =Object.assign({}, rawMetadata, {
      enabled: process.env.MICRO_APP_ENABLED === 'true' ? true : false,
    });
    const jsonMetadata = JSON.stringify(transformedMetadata, null, 2);

    compilation.assets['micro-app.json'] = {
      source() {
        return jsonMetadata;
      },
      size() {
        return jsonMetadata.length;
      },
    };
    callback();
  })
}

module.exports = CreateMetadataPlugin;
