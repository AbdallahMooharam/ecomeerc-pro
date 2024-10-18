const path = require('path');

module.exports = {
    // إعدادات أخرى...
    resolve: {
        fallback: {
            buffer: require.resolve('buffer/'),
            https: require.resolve('https-browserify'),
            querystring: require.resolve('querystring-es3'),
            stream: require.resolve('stream-browserify'),
            os: require.resolve('os-browserify/browser'),
            path: require.resolve('path-browserify'),
            crypto: require.resolve('crypto-browserify'),
            util: require.resolve('util/'),
            fs: false, // إذا لم تحتاج إلى fs في الواجهة الأمامية
            child_process: false, // إذا لم تحتاج إلى child_process
        },
    },
    // ...
};
