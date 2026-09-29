/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/pricing/embed",
        destination: "/pricing",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
