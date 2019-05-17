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

const prodConfig = merge([]);

const developmentConfig = merge([
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
    })
]);

const commonConfig = merge([{
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    }
}, parts.loadCss({
    exclude: /node_modules/
})]);

console.log(commonConfig);

module.exports = mode => {
    if (mode === 'production') {
        return merge(commonConfig, htmlPluginConfig, prodConfig, { mode });
    }
    // console.log(merge(commonConfig, htmlPluginConfig, developmentConfig, { mode }));
    return merge(commonConfig, htmlPluginConfig, developmentConfig, { mode });
}