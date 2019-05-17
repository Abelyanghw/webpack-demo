exports.devServer = ({ host, port } = {}) => ({
    devServer: {
        stats: 'errors-only', //display only errors to reduce the amount of output
        host, //default to localhost
        port, // default 8080
        open: true, // open the page in browser auto,
        overlay: true, // WDS provides an overlay for capturing compilation related warning and errors
    }
});

exports.loadCss = ({ include, exclude } = {}) => ({
    module: {
        rules: [{
            test: /\.css$/,
            include,
            exclude,
            use: ['style-loader', 'css-loader']
        }]
    }
});