const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com'],
  },
  scssOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})
