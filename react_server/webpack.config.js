//var DashboardPlugin = require('webpack-dashboard/plugin');
//var path = require('path');
//module.exports = {
//    entry: './src/index.js',
//    output: {
//        path: './public',
//        filename: 'bundle.js',
//    },
//    module: {
//        loaders: [
//            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
//            { test: /\.scss$/,exclude: /node_modules/, loaders:['style', 'css', 'sass'] }
//        ]
//    },
//    plugins: [
//        new DashboardPlugin()
//    ],
//    devServer: {
//        contentBase: 'public'
//    }
//};
const path = require('path');
const webpack = require('webpack');

const settings = {
    entry: './src/index.js',
    // entry: {
    //     bundle: [
    //         "react-hot-loader/patch",
    //         "./src/frontend/index.js"
    //     ]
    // },
    // output: {
    //     filename: "[name].js",
    //     publicPath: "/",
    //     path: path.resolve("build")
    // },
    output: {
        path: path.join(__dirname, "public"),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [".js", ".json", ".css"]
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["es2015", { modules: false }],
                        "stage-2",
                        "react"
                    ],
                    plugins: [
                        "transform-node-env-inline"
                    ],
                    env: {
                        development: {
                            plugins: ["react-hot-loader/babel"]
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]"
                        },
                    },
                    "postcss-loader" // has separate config, see postcss.config.js nearby
                ]
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname,"public"),
        headers: { "Access-Control-Allow-Origin": "*" },
        publicPath: "http://localhost:8080/", // full URL is necessary for Hot Module Replacement if additional path will be added.
        quiet: false,
        hot: true,
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
    ],
};

module.exports = settings;
