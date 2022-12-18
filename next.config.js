const withTwin = require('./withTwin.js');
const withPWA = require('next-pwa')({
  dest: 'public',
});

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin(
  withPWA({
    reactStrictMode: true,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  })
);
