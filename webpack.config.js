const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//Експортируем настройки
module.exports = {
    //Точка входа
    entry: {
        app: './src/index.js'
    },
    output: {
        // [name].js - если несколько точек входа , то сделаем нужную после выхода
        filename: '[name].js',
        path: path.resolve(__dirname,'./dist'),
        //для dev-server
        publicPath: '/dist'
    },
    module: {
        rules: [{
            //Обратимся ко всем js файлам
            test: /\.js$/,
            loader: 'babel-loader',
            //Если нам нужно исключить файлы 
            exclude: '/node_modules/'
        }, // CSS
            {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: { sourceMap: true}
                }, {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: { path : 'src/js/postcss.config.js'}}
                }
            ]
        }, // SCSS
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true}
                    }, {
                        loader: "postcss-loader",
                        options: {sourceMap: true, config: { path : 'src/js/postcss.config.js'}}
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true}
                    }
                ]
            }
        ]
    },
    devServer: {
        //Показ ошибок
        overlay: true,
    },
    //Регестрируем файлы css , в папке dist - получим app.css
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};