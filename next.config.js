/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            }
        ]
    },
    redirects: async () => {
        return [
            {
                source: '/products/deleted', // 해당 url 접근시
                destination: '/products', // redirect 시킬 url
                permanent: true // 영원히 redirect 시킬지 여부 // 일시적이라면 false
                // 308 status code
            }
        ];
    },
    async rewrites() {
        return [
            {
                source: '/smy', // 해당 경로로 수정
                destination: '/about/me/smy' // 찐 경로
            }
        ];
    }
};

module.exports = nextConfig;
