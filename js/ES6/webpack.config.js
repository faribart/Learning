module.exports={
context:__dirname+"/src",
entry:"./script.js",
output:{
    path:__dirname+"/build",
    filename:"bundel.js"
},
module:{
    rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
}

}