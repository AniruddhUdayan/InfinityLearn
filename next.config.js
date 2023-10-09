/** @type {import('next').NextConfig} */
const nextConfig = {
  domains:["il-uiassets.s3.ap-south-1.amazonaws.com"],
    env: {
        environment: 'local',
        uamAPI: "https://stagingapi.devinfinitylearn.in/"
      },
}

module.exports = nextConfig
