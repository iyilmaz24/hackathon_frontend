const path = require('path');
const HTMLPlugIn = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: 
    {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ]
    },
    plugins: [new HTMLPlugIn({
        title: 'Config HTMLPlugIn',
        filename: 'index.html',
        inject: 'head',
        template: './src/template.html',
      })],
};