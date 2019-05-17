const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new htmlPlugin()
    ]
};