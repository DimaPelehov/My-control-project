export type CategoryEtiamItem = {
    id: number
    image: string
    hrefArticle: string
    title: string
    views: string
}

export const categoryEtiamArr: CategoryEtiamItem[] = [
    {
        id: 1,
        image: '/images/image-1.jpg',
        hrefArticle: 'maecenas tincidunt',
        title: 'Maecenas Tincidunt Eget Libero Massa Vitae',
        views: '10K',
    },
    {
        id: 2,
        image: '/images/sec-post-article-col-img1.jpg',
        hrefArticle: 'quis nascetur',
        title: 'Quis Nascetur Aenean Ipsum Vici',
        views: '685',
    },
    {
        id: 3,
        image: '/images/site-cont-article-col-img6.jpg',
        hrefArticle: 'sapien lorem',
        title: 'Sapien Lorem Libero Augue Tincidunt',
        views: '11.2K',
    },
    {
        id: 4,
        image: '/images/site-cont-article-col-img7.jpg',
        hrefArticle: 'dapibus viverra',
        title: 'Dapibus Viverra Eleifend Rhoncus Eros Aliquam Vivamus',
        views: '20K',
    },
]
