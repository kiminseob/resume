const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
dotenv.config();
const port = process.env.PORT || 3001;

module.exports = (env) => {
  console.log(env);
  return {
    // 개발환경
    mode: 'development',

    // 애플리케이션 시작 경로
    entry: '/src/index.js',

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],

    resolve: {
      extensions: ['.js', '.jsx', '.css'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
      },
    },

    output: {
      path: path.resolve('dist'),
      publicPath: '/',
      filename: 'bundle.js',
    },

    // 개발 서버 설정
    devServer: {
      host: 'localhost',
      port: port,
      open: true, // open page when start
      historyApiFallback: true,
    },
  };
};
