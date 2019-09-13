const path = require('path')

module.exports = {
  context: __dirname,
  
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    progress: true,
    open: true,
    stats: 'minimal'
  }
}