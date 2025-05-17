export default defineEventHandler(async () => {
    return {
        baseImage: {
            id: Math.floor(Math.random() * 10000),
            url: '/images/image-7.png',
        },
        images: [
            {
                id: Math.floor(Math.random() * 10000),
                image: '/images/image-1.png'
            },
            {
                id: Math.floor(Math.random() * 10000),
                image: '/images/image-2.png'
            },
            {
                id: Math.floor(Math.random() * 10000),
                image: '/images/image-3.png'
            },
            {
                id: Math.floor(Math.random() * 10000),
                image: '/images/image-4.png'
            },
            {
                id: Math.floor(Math.random() * 10000),
                image: '/images/image-5.png'
            },
            {
                id: Math.floor(Math.random() * 10000),
                image: '/images/image-6.png'
            },
        ],
    }
});