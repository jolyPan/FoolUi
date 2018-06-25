const path = require('path');
const webpack = require('webpack');

module.exports = {
    //修改组件库的index.js为入口文件
    entry: {
        'xmui': './src/start/index.js'
    },
    // 这里的package不是组件目录，是npm run package:prod最终生成的压缩目录
    output: {
        //path.resolve是nodejs的方法 返回一个绝对路径
        path: path.resolve(__dirname, '../package'),
        //打包后的根目录
        publicPath: '/package/',
        library: 'xmui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: 'vue-style-loader!css-loader',
                    sass: 'vue-style-loader!css-loader!sass-loader'
                },
                postLoaders: {
                    html: 'babel-loader'
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'autoprefixer-loader'
            ]
        }, { 
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
        //  Webpack 3 中提供如下的插件来允许开发者启用作用域提升特性来避免这种额外的性能损耗
    ]
}