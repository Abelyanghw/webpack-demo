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
