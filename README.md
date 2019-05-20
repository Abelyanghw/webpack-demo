# webpack-demo
start webpack notes for webpack

# webpack start

## webpack install
  npm install webpack webpack-cli --save-dev -D

## prevent accidental publish of ur code 
  private: true in package.json

## npx webpack to build bundle files

## change to webpack.config.js file 
  ```
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.join(__dirname, 'dist')
        }
    };
  ```
## npm command for webpack 
   add the command npm build under script object in the package.json
   ```
   "build": "webpack"
   ```
   npm run build -- this command can build the bundle files too. 
   
## diff webpack development and production mode

   production mode can generate optimize , minimize source code. 
## use html plugin 
   ```
   const htmlPlugin = require('html-webpack-plugin');
   plugins: [
        new htmlPlugin()
    ]
  ```
## webpack watch mode and webpack-dev-server(WDS) 
  watch mode can detects the code changes and recompiles automatically. 
  npm run build -- --watch
  WDC implements a watch mode and goes even further
  npm install webpack-dev-server --save-dev

  after installed, will add one command into node_modules/.bin folder and can run webpack-dev-server command to start use default options. 

  also can config the WDS options into webpack.config file 

  ```
  devServer: {
        stats: 'errors-only', //display only errors to reduce the amount of output
        host: process.env.HOST, //default to localhost
        port: process.env.PORT, // default 8080
        open: true, // open the page in browser auto,
        overlay: true, // WDS provides an overlay for capturing compilation related warning and errors
    }
  ```
## composing the webpack config by merging 
    Object.assign , array.concat, webpack-merge can be used. 

    npm install webpack-merge --save-dev

## Css loader
  - style & css loader
   npm install css-loader style-loader --save-dev
   then config the css loader in webpack config 
   ```
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
   ```
   merge into the common config
   ```
   merge([..., parts.loadCss({
    exclude: /node_modules/
   }]);
   ```
   - less loader 
   npm install less-loader --save-dev
   ```
   {
     test: /\.less$/,
     use: ["style-loader", "css-loader", "less-loader"]
   }
   ```
   - sass-loader 
   npm install node-sass sass-loader --save-dev 
   ```
   {
     test: /\.scss$/,
     use: ["style-loader", "css-loader", "sass-loader"]
   }
   ```
   -postcss loader 
   npm install postcss-loader
   ```
   {
     test: /\.css$/,
     use: ["style-loader", "css-loader", {
       loader: "postcss-loader",
       options: {
         plugins: () => ([require('autoprefixer'), require('precss')])
       }
     }]
   }
   ```
## MCEP mini-css-extract-plugin
   extract multiple css file into a seprate one. 
   npm install mini-css-extract-plugin --save-dev
   ```
   exports.extractCss = ({ include, exclude, use = [] }) => {
    const plugin = new MiniCssExtractPlugin({
        fileName: '[name].css',
    });
    return {
        module: {
            rules: [{
                test: /\.css$/,
                include,
                exclude,
                use: [MiniCssExtractPlugin.loader].concat(use)
            }]
        },
        plugins: [plugin]
    }
   };
   ```
   ```
   const prodConfig = merge([
    parts.extractCss({
        use: 'css-loader',
    })
   ])
   ```
## Loading Assets 
  using webpack's loaders,escpecially images, fonts, and javascript receive particular attention. 
  can use 'use' or 'context' field 
  - Anatomy of a loader 
  ```
  include: path.join(__dirname, 'app'),
  exclude(path) {
    return path.match(/node_modules/);
  }
  ```
  - loader Evaluation order
  webpack loader always evaluated from right to left and from bottom to top. 
  - loader for image 
  ```
  {
    test:/\/(jpg|png)$/,
    use: {
      loader: "url-loader",
      options: {
        limit: 25000
      }
    }
  }
  ```
# appendix 
  [webpack online survivejs.com](https://survivejs.com/webpack)