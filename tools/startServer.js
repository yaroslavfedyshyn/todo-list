const path = require('path');
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const webpackConfig = require('../webpack.config.dev');

const environments = {
    NODE_ENV: process.env.NODE_ENV,
    PROXY_URL: process.env.PROXY_URL || 'localhost:3000',
    PORT: process.env.PORT || '4000',
    PORT_UI: process.env.PORT_UI || '4001',
};
const bundler = webpack(webpackConfig);

const app = express();

switch (environments.NODE_ENV) {
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


app.listen(environments.PORT, () => {
    console.log(`Server ${environments.NODE_ENV} started at port ${environments.PORT}`);
});
