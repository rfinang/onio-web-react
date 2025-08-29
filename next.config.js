/** @type {import('next').NextConfig} */
module.exports = {
    webpack: (config) => {
        config.resolve.fallback = { dns: false, stream: false, ioredis: false, crypto: false,
        './redis/index.js': false, net: false, tls: false, 'querystring': false};

        return config;
    }
}
