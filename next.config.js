/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/public',
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  }
}

module.exports = nextConfig
