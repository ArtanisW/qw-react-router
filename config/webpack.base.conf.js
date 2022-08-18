const path = require('path');
const webpack = require('webpack');
// https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = path.resolve;
const Env = require('./env');
const theme = require('./theme.js');
const postcssConfigPath = resolve(__dirname, './postcss.config.js');
const styleLoader =
  Env.isQA() || Env.isProduction()
    ? MiniCssExtractPlugin.loader
    : 'style-loader';

module.exports = (env) => {
  // 定义环境变量，在package.json中使用--env CUSTOM_CONFIG=xxx
  // 读取自定义环境变量，可以使用 env.CUSTOM_CONFIG
  // console.log(env.CUSTOM_CONFIG);
  return {
    entry: {
      vendors: ['antd', 'react', 'react-dom', 'react-router-dom'],
      app: './src/index.jsx',
    },
    output: {
      path: resolve(__dirname, '../dist'),
      filename: '[name].js',
      publicPath: '', // 根据不同环境可设置不同，自行修改
      chunkFilename: '[name].[chunkhash].js',
      crossOriginLoading: 'anonymous',
      assetModuleFilename: 'files/[hash][ext][query]',
      clean: true,
    },
    optimization: {
      nodeEnv: false,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.scss', '.css'],
      alias: {
        '@src': resolve('src'),
        '@common': resolve('src/common'),
        '@components': resolve('src/components'),
        '@constants': resolve('src/constants'),
      },
    },
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css/i,
          include: [resolve('src'), resolve('asset/css')],
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                modules: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                postcssOptions: {
                  config: postcssConfigPath,
                },
              },
            },
          ],
        },
        {
          test: /\.less/i,
          include: [resolve('asset/css'), resolve('node_modules/antd/')],
          use: [
            styleLoader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                postcssOptions: {
                  config: postcssConfigPath,
                },
              },
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                  modifyVars: theme,
                  math: 'always',
                },
              },
            },
          ],
        },
        {
          test: /\.less$/,
          include: [resolve('src')],
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                postcssOptions: {
                  config: postcssConfigPath,
                },
              },
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                  modifyVars: theme,
                  math: 'always',
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      // generate HTML
      new HtmlWebpackPlugin({
        title: 'Custom template',
        // Load a custom template (lodash by default)
        template: path.resolve(process.cwd(), './', 'index.html'),
      }),
      // 定义环境变量
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: process.env.NODE_ENV
            ? JSON.stringify(process.env.NODE_ENV)
            : JSON.stringify('dev'),
        },
      }),
    ],
  };
};
