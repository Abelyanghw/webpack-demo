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
    ],
    devServer: {
        stats: 'errors-only', //display only errors to reduce the amount of output
        host: process.env.HOST, //default to localhost
        port: process.env.PORT, // default 8080
        open: true, // open the page in browser auto,
        overlay: true, // WDS provides an overlay for capturing compilation related warning and errors
    }
};