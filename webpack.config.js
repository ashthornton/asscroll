require('webpack')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		asscroll: path.resolve(__dirname, 'src/index.js'),
		'asscroll.min': path.resolve(__dirname, 'src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		library: {
			name: 'ASScroll',
			type: 'umd',
			export: 'default'
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: [
								['@babel/preset-env', {
									targets: {
										browsers: [
											"last 2 versions",
											">= 1%",
											"Firefox ESR",
											"safari >= 12",
											"not ie >= 10",
											"not ie_mob >= 10"
										]
									},
									corejs: 3,
									useBuiltIns: 'usage'
								}]
							]
						}
					},
					'eslint-loader'
				]
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			test: /\.min.js$/
		})]
	}
}