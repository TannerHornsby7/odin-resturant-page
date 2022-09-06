const path = require('path');
const { runInContext } = require('vm');
const { RuntimeModule } = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: "inline-source-map",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {//css loader
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {//images loader
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {//font loader
            test: /\.(otf|ttf|eot|woff|woff2)$/i,
            type: 'asset/resource',
        },
    ],
  },
};