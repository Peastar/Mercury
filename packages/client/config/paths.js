const path = require('path');

module.exports = {
    src: path.resolve(__dirname, '../source'),
    build: path.resolve(__dirname, '../destination'),
    public: path.resolve(__dirname, '../public'),
};
