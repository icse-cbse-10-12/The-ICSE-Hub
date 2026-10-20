/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  // Keep the normal Next.js/Vercel behavior; use a static export only for GitHub Pages.
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: '/The-ICSE-Hub',
        assetPrefix: '/The-ICSE-Hub/',
        trailingSlash: true,
      }
    : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
