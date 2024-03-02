export type Article = {
    id: number
    image: string
    hrefArticle: string
    hrefAuthor?: string
    imageAuthor?: string
    authorName?: string
    months?: string
    day?: number
    year?: number
    category?: string
    title: string
    views?: string
    minuteRead?: number
    text?: string
    shares?: number
    facebookCount?: number
    instaCount?: number
    count: number
    isBasic?: boolean
    isLatest?: boolean
    itemNumber?: string
    isSectionPostColumn?: boolean
    isMenuCategoryAenenan?: boolean
    isMenuCategoryVulputate?: boolean
    isMenuCategoryEtiam?: boolean
}

export const articlesArray: Article[] = [
    {
        id: 1,
        image: '/images/site-cont-article-col-img1.jpg',
        hrefArticle: 'ipsum sociic',
        hrefAuthor: 'joanna-author',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        months: 'September',
        day: 1,
        year: 2000,
        category: 'Vulputate',
        title: 'Ipsum Sociis Ac Pretium Enim Neque Rhoncus Adipiscing',
        views: '2.8',
        minuteRead: 2,
        text: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat  justo enim.…',
        shares: 757,
        facebookCount: 56,
        instaCount: 45,
        count: 1,
        isBasic: true,
        isMenuCategoryVulputate: true,
    },
    {
        id: 2,
        image: '/images/site-cont-article-col-img2.jpg',
        hrefArticle: 'donec cras',
        hrefAuthor: 'elliot-author',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Anderson',
        months: 'October',
        day: 2,
        year: 2001,
        category: 'Maecenas',
        title: 'Donec Cras Ut Eget Justo Nec Semper Sapien Viverra Ante',
        views: '1.8',
        minuteRead: 1.5,
        text: 'This is test text pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat  justo enim.…',
        shares: 743,
        facebookCount: 121,
        instaCount: 5,
        count: 1,
        isBasic: true,
    },
    {
        id: 3,
        image: '/images/site-cont-article-col-img3.jpg',
        hrefArticle: 'dictum dapibus',
        hrefAuthor: 'elliot-author',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Anderson',
        months: 'November',
        day: 3,
        year: 2002,
        category: 'Vulputate',
        title: 'Dictum Dapibus Nam Massa Veni Tempus',
        views: '1.6',
        minuteRead: 4,
        text: 'This is test text pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat  justo enim.…',
        shares: 71,
        facebookCount: 1231,
        instaCount: 23,
        count: 1,
        isBasic: true,
        isMenuCategoryVulputate: true,
    },
    {
        id: 4,
        image: '/images/site-cont-article-col-img4.jpg',
        hrefArticle: 'nisi dolor',
        hrefAuthor: 'joanna-author',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        months: 'December',
        day: 4,
        year: 2003,
        category: 'Maecenas',
        title: 'Nisi Dolor Etiam Eleifend Amet Nam Penatibus',
        views: '3.2',
        minuteRead: 2,
        text: 'This is test text pulvinar montes lorem et pede dis it`s just a text dolor pretium donec dictum.Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
    },
    {
        id: 5,
        image: '/images/site-cont-article-col-img5.jpg',
        hrefArticle: 'nunc libero',
        hrefAuthor: 'joanna-author',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        months: 'January',
        day: 5,
        year: 2004,
        category: 'Vulputate',
        title: 'Nunc libero etiam enim',
        views: '3.2',
        minuteRead: 2,
        text: 'This is test text pulvinar montes lorem et pede dis it`s just a text dolor pretium donec dictum.Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        isMenuCategoryVulputate: true,
    },
    {
        id: 6,
        image: '/images/site-cont-article-col-img6.jpg',
        hrefArticle: 'sapien lorem',
        hrefAuthor: 'eliot-author',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Anderson',
        months: 'February',
        day: 6,
        year: 2005,
        category: 'Etiam',
        title: 'Sapien Lorem Libero Augue Tincidunt',
        views: '3.2',
        minuteRead: 2,
        text: 'This is test text pulvinar montes text dolor pretium donec dictum lorem et pede dis it`s just a text dolor pretium donec dictum.Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        isMenuCategoryEtiam: true,
    },
    {
        id: 7,
        image: '/images/site-cont-article-col-img7.jpg',
        hrefArticle: 'dapibus viverra',
        hrefAuthor: 'eliot-author',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Anderson',
        months: 'Marth',
        day: 7,
        year: 2006,
        category: 'Etiam',
        title: 'Dapibus Viverra Eleifend Rhoncus Eros Aliquam Vivamus',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        isMenuCategoryEtiam: true,
    },
    {
        id: 8,
        image: '/images/site-cont-article-col-img8.jpg',
        hrefArticle: 'rhoncus ante',
        hrefAuthor: 'joanna-author',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        months: 'April',
        day: 8,
        year: 2007,
        category: 'Aenean Eleifend',
        title: 'Rhoncus Ante Sit Nulla Sed Tellus Blandit Eleifend',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        isMenuCategoryAenenan: true,
    },
    {
        id: 9,
        image: '/images/site-cont-article-col-img9.jpg',
        hrefArticle: 'etiam ante',
        hrefAuthor: 'joanna-author',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        months: 'May',
        day: 9,
        year: 2008,
        category: 'Aenean Eleifend',
        title: 'Etiam Ante Sem Enim Ipsum Amet Eros Ligula Vivamus',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        isMenuCategoryAenenan: true,
    },
    {
        id: 10,
        image: '/images/site-cont-article-col-img10.jpg',
        hrefArticle: 'justo eleifend',
        hrefAuthor: 'elliot-author',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Andersen',
        months: 'June',
        day: 10,
        year: 2009,
        category: 'Maecenas',
        title: 'Justo Eleifend Venenatis Rhoncus Natoque Pretium Etiam',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
    },
    {
        id: 11,
        image: '/images/site-cont-article-col-img11.jpg',
        hrefArticle: 'pellentesque porttitor',
        hrefAuthor: 'elliot-author',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Andersen',
        months: 'July',
        day: 11,
        year: 2010,
        category: 'Vulputate',
        title: 'Pellentesque porttitor nec amet',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
    },
    {
        id: 12,
        image: '/images/site-cont-article-col-img12.jpg',
        hrefArticle: 'integer maecenas',
        hrefAuthor: 'joanna-author',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        months: 'August',
        day: 12,
        year: 2011,
        category: 'Aenean Eleifend',
        title: 'Integer Maecenas Eget Viverra',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
    },
    // це були основні статті
    // далі статті latest
    {
        id: 14,
        hrefArticle: 'vitae nec ',
        hrefAuthor: 'elliot-author',
        authorName: 'Elliot Anderson',
        months: 'October',
        day: 30,
        year: 2023,
        title: 'Vitae Nec Adipiscing Quis Semper Quam Tellus Nascetur',
        image: '/images/sec-post-article-col-img3.jpg',
        itemNumber: '01',
        count: 1,
        isLatest: true,
        isSectionPostColumn: true,
        views: '3.4',
        shares: 54,
        category: 'Maecenas',
    },
    {
        id: 15,
        hrefArticle: 'tempus vitae ',
        hrefAuthor: 'joanna-author',
        authorName: 'Joanna Wellick',
        months: 'October',
        day: 16,
        year: 2024,
        title: 'Tempus Vitae Quis Rutrum Vel Ut Eget Eu Pulvinar Blandit',
        image: '/images/sec-post-article-col-img5.jpg',
        itemNumber: '02',
        count: 1,
        isLatest: true,
        isSectionPostColumn: true,
        views: '2.9',
        shares: 900,
        category: 'Rhoncus',
        isMenuCategoryAenenan: true,
    },
    {
        id: 16,
        hrefArticle: 'et tellus ',
        hrefAuthor: 'joanna-author',
        authorName: 'Joanna Wellick',
        months: 'October',
        day: 13,
        year: 2024,
        title: 'Et Tellus Id Magnis Nisi Maecenas Eget Nam',
        image: '/images/sec-post-article-col-img4.jpg',
        itemNumber: '03',
        count: 1,
        isLatest: true,
        isSectionPostColumn: true,
        views: '3.2',
        shares: 1212,
        category: 'Aenean Eleifend',
        isMenuCategoryAenenan: true,
    },
    // sectionPostColumn
    {
        id: 17,
        image: '/images/sec-post-article-col-img1.jpg',
        category: 'Etiam',
        title: 'Quis Nascetur Aenean Ipsum Vici',
        hrefArticle: 'quis nasqetur',
        hrefAuthor: 'joanna-author',
        authorName: 'Joanna Wellick',
        views: '2.8',
        shares: 757,
        count: 1,
        isSectionPostColumn: true,
        isMenuCategoryEtiam: true,
    },
    {
        id: 18,
        image: '/images/sec-post-article-col-img2.jpg',
        category: 'Vulputate',
        title: 'Tellus Etiam Commodo Pellentesque Nec Elit Quis Massa',
        hrefArticle: 'tellus etiam',
        hrefAuthor: 'elliot-author',
        authorName: 'Elliot Anderson',
        views: '2.1',
        shares: 862,
        count: 1,
        isSectionPostColumn: true,
        isMenuCategoryVulputate: true,
    },
    // menuCategoryEtiam
    {
        id: 19,
        image: '/images/image-1.jpg',
        hrefArticle: 'maecenas tincidunt',
        title: 'Maecenas Tincidunt Eget Libero Massa Vitae',
        views: '10K',
        count: 1,
        isMenuCategoryEtiam: true,
    },
]