/** @type {import('next').NextConfig} */
const platform = process.env.NEXT_PUBLIC_PLATFORM || 'vercel'
const isStatic = platform === 'static'

const nextConfig = {
  output: isStatic ? 'export' : undefined,
  trailingSlash: isStatic,
  
  images: {
    unoptimized: isStatic ? true : false,
  },
  
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
