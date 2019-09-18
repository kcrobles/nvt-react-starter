// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: path.resolve(__dirname, 'src/index.js'),
//   output: {
//     path: path.resolve(__dirname, 'public/assets'),
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   module: {
//     rules: [
//       {
//         loader: 'babel-loader',
//         test: /\.jsx?$/,
//         exclude: /node_modules/
//       }
//     ]
//   },
//   devtool: 'eval-source-map',
//   devServer: {
//     contentBase: path.join(__dirname, 'public'),
//     historyApiFallback: true,
//     hot: true,
//     port: 3000,
//     publicPath: '/assets/'
//   }
// }

const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'build:dev' || TARGET === 'dev' || !TARGET) {
  module.exports = require('./config/webpack.config.dev');
  console.info('--> ./config/webpack.config.dev.js');
} else if (TARGET === 'build') {
  module.exports = require('./config/webpack.config.prod');
  console.info('--> ./config/webpack.config.prod.js');
} else if (TARGET === 'stats') {
  module.exports = require('./config/webpack.config.stats');
}
