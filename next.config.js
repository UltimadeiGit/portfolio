/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio', // Replace 'portfolio' with your repo name
    assetPrefix: '/portfolio', // Prefix for static assets
    trailingSlash: true, // Ensures directories end with '/'
}

module.exports = nextConfig;