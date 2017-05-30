var config = {
    context: __dirname + "/src",
    entry: './main.js', //Entry point

   output: {
      path: __dirname + "/dist",
      filename: 'chatapp.js' //Compiled file
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
     loaders: [ //Loaders used for library.
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: {  presets: ['es2015', 'react'] }}
     ]
   }
}

module.exports = config;
