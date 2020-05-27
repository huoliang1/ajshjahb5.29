const path = require('path');
// 引入html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  //每次打包自动清理dist
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');    //复制文件

module.exports = {
  entry: './src/index.js',  //入口
  output: {
    path: path.resolve(__dirname, 'dist'),  //打包完成后的文件
    filename: 'min.js'
  },


    //  配置各种loder
    module:{
        rules:[
            // 解析 ES6 语法loder
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },

            //   CSS Loder
              {
                test: /\.css$/i,
                use: ['vue-style-loader', 'css-loader'],
              },


            //   图片loder
              {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,               		// 8kb以下的图片会base64处理
                        outputPath: 'images',           // 文件本地输出路径
                        publicPath: '../build/images',   // 图片的url路径
                        name: '[hash:8].[ext]',         // 修改文件名称和后缀 
                    }
                }
            },

            // vue 文件处理 loder
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            }
        ]
    },

    // 配置各种插件
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/public/index.html', // 设置要编译的 HTML 源文件路径
        }),
        new CleanWebpackPlugin(), 
           
        new VueLoaderPlugin(),   //vue 相关插件

        new CopyPlugin([      //复制文件到dist
          {
            from:path.resolve(__dirname,"src/public"),
            to:path.resolve(__dirname,"dist"),
            ignore:['index.html']
          }
        ]),
    ],

        // development 与 production 开发环境(二选一)
        mode: 'development',

        // 配置 自动打包 打开浏览器
        // 命令  npm install webpack-dev-server --save-dev
        devServer: {
            open: true,
            port: 8080,
            quiet:true,
          },
        //   定位出错所在的原始代码行
          devtool:  'cheap-module-eval-source-map',

          // 配置后缀省略
          resolve:{
            extensions: [".js", ".json",".vue"],
            alias:{
              "@":path.resolve(__dirname, 'src')   //取别名  让@符代表根目录下的src
            }
          }
};