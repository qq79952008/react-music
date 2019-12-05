module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('postcss-plugin-px2rem')({
      exclude: /node_modules/,
      rootValue: 100, //px转rem的基准值，100px=1rem
    })
  ]
}