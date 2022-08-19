const path = require('path');
const mockMiddlewarePlugin = require('mock-middleware-plugin');
const { initFiles } = require('mock-middleware-plugin/util');
const bodyParser = require('body-parser');
const Env = require('./env');

const mockport = 8090;
if (Env.isDev()) {
  initFiles();
}

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  // 以下配置用于解决：ChunkLoadError: Loading hot update chunk vendors failed.
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
  },
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    port: mockport,
    hot: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:' + mockport,
        pathRewrite: { '^/api': '' },
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request');
            return '/index.html';
          }
        },
      },
    },
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      middlewares.push(bodyParser.json());
      middlewares.push(bodyParser.urlencoded({ extended: true }));
      middlewares.push(
        mockMiddlewarePlugin(path.resolve(process.cwd(), './mock'))
      );
      return middlewares;
    },
  },
};
