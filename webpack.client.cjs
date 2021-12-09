const path = require('path')

module.exports = {
  mode: 'production', // 'development'
  stats: 'errors-warnings',
  // devtool: 'inline-source-map',
  entry: './src/client/client.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/client')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: { http: false }
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
}
