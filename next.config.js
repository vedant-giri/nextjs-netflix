/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['occ-0-3933-116.1.nflxso.net']
    },
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true }
        return config
    },
}

module.exports = nextConfig
