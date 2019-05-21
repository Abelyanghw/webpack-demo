const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const htmlPluginConfig = merge([{
    plugins: [
        new htmlPlugin({
            title: 'Webpack Demo'
        })
    ],
}])

//const prodConfig = merge([]);
const prodConfig = merge([
    parts.extractCss({
        use: 'css-loader',
    }),
    parts.generateSourceMaps({
        type: 'source-map'
    }),
    {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'initial',
                    }
                }
            }
        }
    },
    parts.clean(),
    parts.minifyJavascript(),
    parts.minifyCss({
        options: {
            discardComments: {
                removeAll: true
            }
        },
        safe: true
    })
])

const developmentConfig = merge([
    parts.loadJs({
        include: path.join(__dirname, 'src'),
        exclude(path) {
            return path.match(/node_modules/);
        }
    }),
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
    }),
    parts.loadCss({ exclude: /node_modules/ })
]);

const commonConfig = merge([{
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, 'dist')
    }
}]);

//parts.loadCss({exclude: /node_modules/})

console.log(commonConfig);

module.exports = mode => {
    if (mode === 'production') {
        return merge(commonConfig, htmlPluginConfig, prodConfig, { mode });
    }
    // console.log(merge(commonConfig, htmlPluginConfig, developmentConfig, { mode }));
    return merge(commonConfig, htmlPluginConfig, developmentConfig, { mode });
};