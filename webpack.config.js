const path = require('path');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: [path.resolve(__dirname, './index.js')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    open: true,
    liveReload: true,
    historyApiFallback: {
      index: 'index.html',
      disableDotRule: true,
    },
  },
};

module.exports = config;
