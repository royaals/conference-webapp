/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/converse',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  