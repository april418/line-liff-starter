const { resolve } = require('path')

const SRC_DIR = resolve(__dirname, 'src')
const DIST_DIR = resolve(__dirname, 'www')
const SRC_ROOT_FILE = 'index.tsx'
const BUNDLE_FILENAME = 'bundle.js'

module.exports = {
  mode: 'production',

  entry: resolve(SRC_DIR, SRC_ROOT_FILE),
  output: {
    filename: BUNDLE_FILENAME,
    path: resolve(DIST_DIR, 'js')
  },

  // webpack-dev-server's config.
  devServer: {
    contentBase: DIST_DIR,
    publicPath: '/js/',
    watchContentBase: true
 },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
}
