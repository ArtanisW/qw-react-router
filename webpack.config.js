const { merge } = require('webpack-merge');
const Env = require('./config/env');
const baseConfig = require('./config/webpack.base.conf');
const prodConfig = require('./config/webpack.prod.conf');
const devConfig = require('./config/webpack.dev.conf');

let config = devConfig;

if (Env.isQA() || Env.isProduction()) {
  config = prodConfig;
}

module.exports = (env) => {
  return merge(baseConfig(env), config);
};
