const mix = require('laravel-mix');

mix

.webpackConfig({
    module: {
      rules: [
        {
            enforce: 'pre',
            exclude: /node_modules/,
            loader: 'eslint-loader',
            test: /\.js$/
        },
      ]
    }
  })

// Set up the JS entry point
.js('src/index.js', 'dist/asscroll.js')
.js('demo/index.js', 'demo/build.js')

if (!mix.inProduction()) {
    // Include separate source maps in development builds.
    mix.webpackConfig({
        devtool: 'cheap-module-source-map'
    });
    mix.sourceMaps();
} else {
    // In production
    mix.babel('dist/asscroll.js', 'dist/asscroll.js')
}