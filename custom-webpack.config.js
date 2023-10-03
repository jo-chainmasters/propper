const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'STABLE_FEATURE': JSON.stringify(true),
      'EXPERIMENTAL_FEATURE': JSON.stringify(false)
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    })
  ],
  resolve: {
    fallback: {
      buffer: false,
      crypto: false,
      events: false,
      path: false,
      stream: false,
      string_decoder: false,
    },
  },
};
