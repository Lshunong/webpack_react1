const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    mode:"development", //开发环境  打包出来的代码不压缩
    entry:"./src/index.js",//入口文件
    //output 开发阶段暂时不用配置
    resolve: {
        // 别名
        alias: {
          "?": "./src",
          "#": "./src/components",
          "@": "./src/assets"
        },
        // 拓展名
        extensions: [".jsx", ".js", ".json"]
      },
      //代理服务器跨域
      devServer:{
        proxy:{
          '/':{
            target:'http://127.0.0.1:3000', //发送给真正的服务器
            secure:false //设置支持httpx协议的代理
          }
        }
      },
    module:{
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react'],
                  //箭头函数配置
                  plugins: ['@babel/plugin-proposal-class-properties',"react-hot-loader/babel"]
                }
              }
            },
            {
              test: /\.css$/,
              use: [
                {
                  loader: "style-loader" // creates style nodes from JS strings
                },
                {
                  loader: "css-loader" // translates CSS into CommonJS
                }
              ]
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "less-loader" // compiles Less to CSS
                  }
                ]
              },
              {
                test: /\.(png|jpg|gif|ttf|woff|woff2|eot|svg)$/i,
                use: [
                  {
                    loader: "url-loader"
                  }
                ]
              }
          ]
    },
    plugins:[
        new HtmlWebpackPlugin({
          // 以 public/index.html为模版生成一个html文件去运行我们的打包好的js
          template:'./public/index.html'
        })
      ]

}