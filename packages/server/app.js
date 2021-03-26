import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import webpack from 'webpack';
// import webpackDevServer from 'webpack-dev-server';
//
import config from '../client/webpack.config.js';
import index from './routes/index';
import graphql from './routes/graphql';
import well from './routes/well-known';

const handleRender = (req, res) => {
    console.log(req.headers);
    const html = ReactDOMServer.renderToString();

    fs.readFile(
        path.join(__dirname, '../client/destination/index.html'),
        'utf8',
        (err, data) => {
            if (err) {
                throw err;
            }

            const document = data.replace(
                /<div id="root"><\/div>/,
                `<div id="root">${html}</div>`,
            );

            res.send(document);
        },
    );
};

// const options = {
//     contentBase: path.join(__dirname, '../client/destination'),
//     hot: true,
//     open: true,
//     compress: true,
//     watchContentBase: true,
//     historyApiFallback: true,
// };

const app = express();
// console.log(config);
// webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
console.log(compiler);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors(), bodyParser.json());
app.use('/', index);
app.use('/graphql', graphql);
app.use('/.well-known/acme-challenge/', well);
app.use(express.static(path.join(__dirname, '../client/destination')));
// app.use(new webpackDevServer(compiler, options));

app.use(
    require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
    }),
);

app.use(
    require('webpack-hot-middleware')(compiler, {
        log: false,
        path: '/__webpack_hmr',
    }),
);

mongoose
    .connect('mongodb://localhost:27017/mercury', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

app.get('*', handleRender);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    console.log(err);
    err.status = 404;
    next(err);
});

// error handler
app.use((req, res, next) => {
    // set locals, only providing error in development
    console.log(req);
    console.log(res);
    console.log(next);
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};
    //
    // // render the error page
    // res.status(err.status || 500);
    // res.send({
    //     message: err.message,
    //     error: err,
    // });
});

module.exports = app;
