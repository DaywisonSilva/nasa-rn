module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@pages': './src/pages',
            '@assets': './src/assets',
            '@api': './src/api',
            '@services': './src/services'
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      ]
    ]
  }
}
