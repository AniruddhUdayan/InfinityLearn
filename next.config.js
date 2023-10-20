/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        environment: 'local',
        uamAPI: "https://stagingapi.devinfinitylearn.in/",
        studentPortal: "https://dashboard.devinfinitylearn.in/",
        domain:".devinfinitylearn.in"
      },
}

module.exports = nextConfig
