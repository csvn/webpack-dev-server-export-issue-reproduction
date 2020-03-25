module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    ecmaVersion: 2015,
    library: 'main',
    libraryTarget: 'window'
  },
  devServer: {
    port: 3001,
    contentBase: require('path').join(__dirname, 'public'),
    open: false
  }
};
