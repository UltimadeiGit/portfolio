/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // Ensures paths like `/about/` instead of `/about`
     basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
}

module.exports = nextConfig;