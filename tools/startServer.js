const path = require('path');
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const webpackConfig = require('../webpack.config.dev');
const config = require('./config');

const bundler = webpack(webpackConfig);

const app = express();

switch (config.NODE_ENV) {
    case 'development':
        app.use(historyApiFallback());

        app.use(webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath,
            noInfo: true,
            quiet: false,
            stats: {
                assets: false,
                colors: true,
                version: false,
                hash: false,
                timings: false,
                chunks: false,
                chunkModules: false,
            },
        }));
        app.use(webpackHotMiddleware(bundler));
        break;
    default:
        app.use(historyApiFallback());

        const buildAppPath = path.join(__dirname, '../dist').normalize();
        app.use(express.static(buildAppPath));
        break;
}


app.listen(config.PORT, () => {
    console.log(`Server ${config.NODE_ENV} started at port ${config.PORT}`);
});
