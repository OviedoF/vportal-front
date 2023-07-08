/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config')


const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/public',
  },
  i18n,
}

module.exports = nextConfig
