/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // الزامی برای هاست استاتیک مانند InfinityFree
  images: {
    unoptimized: true, // الزامی برای خروجی استاتیک بدون سرور Node.js
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
