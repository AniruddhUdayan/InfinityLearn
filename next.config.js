/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        environment: 'local',
        uamAPI: "https://stagingapi.devinfinitylearn.in/"
      },
      images: {
        unoptimized: true,
      },
}

module.exports = nextConfig;
