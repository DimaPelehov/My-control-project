export type CategoryVulputateItem = {
    id: number
    image: string
    hrefArticle: string
    title: string
    views: string
}

export const categoryVulputateArr: CategoryVulputateItem[] = [
    {
        id: 1,
        image: '/images/sec-post-article-col-img2.jpg',
        hrefArticle: 'tellus etiam',
        title: 'Tellus Etiam Commodo Pellentesque Nec Elit Quis Massa',
        views: '567',
    },
    {
        id: 2,
        image: '/images/site-cont-article-col-img1.jpg',
        hrefArticle: 'ipsum sociis',
        title: 'Ipsum Sociis Ac Pretium Enim Neque Rhoncus Adipiscing',
        views: '685',
    },
    {
        id: 3,
        image: '/images/site-cont-article-col-img3.jpg',
        hrefArticle: 'dictum dapibus',
        title: 'Dictum Dapibus Nam Massa Veni Tempus',
        views: '11.2K',
    },
    {
        id: 4,
        image: '/images/site-cont-article-col-img5.jpg',
        hrefArticle: 'nunc libero',
        title: 'Nunc libero etiam enim',
        views: '20K',
    },
]
