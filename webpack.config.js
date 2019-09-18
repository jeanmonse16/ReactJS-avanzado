const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - La App de fotos de mascotas!',
      shortname: 'Petgram',
      description: 'Con esta App puedes interactuar con fotos de animales domésticos facilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [{
        src: path.resolve('src/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512]
      }]
    })
  ]
}
