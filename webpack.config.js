const path = require('path');


module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            '@assets': path.resolve('resources/app/assets'),
        },
    },
};
