/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio', // Where 'portfolio' is the repo name
    assetPrefix: '/portfolio', // Prefix for static assets
    trailingSlash: true, // Ensures directories end with '/'
    images: {
        unoptimized: true, // Disable image optimization for static exports
    }
}

module.exports = nextConfig;