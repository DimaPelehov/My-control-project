export type Article = {
    id: number
    image: string
    hrefArticle: string
    hrefAuthor?: string
    imageAuthor?: string
    authorName?: string
    authorDescription?: string
    months?: string
    day?: number
    year?: number
    category?: string
    hrefCategory?: string
    title: string
    views?: string
    minuteRead?: number
    text?: string
    shares?: number
    facebookCount?: number
    instaCount?: number
    count: number
    firstArticlePageImg?: string
    isBasic?: boolean
    isLatest?: boolean
    itemNumber?: string
    isSectionPostColumn?: boolean
    isMenuCategoryAenenan?: boolean
    isMenuCategoryVulputate?: boolean
    isMenuCategoryEtiam?: boolean
    isAenean?: boolean
    isVulputate?: boolean
    isEtiam?: boolean
    isJoannaArticle?: boolean
    isJoannaPageLatest?: boolean
    isElliotArticle?: boolean
    isElliotPageLatest?: boolean
    articleReviews?: {
        name: string
        text: string
        userImg?: string
        email?: string
    }[]
}

export const articlesArray: Article[] = [
    {
        id: 1,
        articleReviews: [
            {
                name: 'Dima',
                userImg: '/images/userImage.png',
                text: 'It`s 1 review in id 1',
            },
            {
                name: 'Dasha',
                userImg: '/images/userImage.png',
                text: 'It`s 2 review in id 1',
            },
        ],
        image: '/images/site-cont-article-col-img1.jpg',
        hrefArticle: 'ipsum sociic',
        hrefAuthor: 'joanna_page',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        authorDescription:
            'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
        isJoannaArticle: true,
        months: 'September',
        day: 1,
        year: 2000,
        category: 'Vulputate',
        hrefCategory: 'vulputate_category',
        isVulputate: true,
        title: 'Ipsum Sociis Ac Pretium Enim <span class="font-weight-400"> Neque Rhoncus Adipiscing</span>',
        views: '2.8',
        minuteRead: 2,
        text: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat  justo enim.…',
        shares: 757,
        facebookCount: 56,
        instaCount: 45,
        count: 1,
        isBasic: true,
        isMenuCategoryVulputate: true,
        firstArticlePageImg: '/images/site-cont-article-col-img7.jpg',
    },
    {
        id: 2,
        articleReviews: [
            {
                name: 'Olga',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 2',
            },
        ],
        image: '/images/site-cont-article-col-img2.jpg',
        hrefArticle: 'donec cras',
        hrefAuthor: 'elliot_page',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Anderson',
        authorDescription:
            'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius tincidunt nec aliquam arcu tempus vel laoreet lorem.',
        isElliotArticle: true,
        months: 'October',
        day: 2,
        year: 2001,
        category: 'Maecenas',
        hrefCategory: 'maecenas_category',
        title: 'Donec Cras Ut Eget Justo Nec <span class="font-weight-400">Semper Sapien Viverra Ante</span>',
        views: '1.8',
        minuteRead: 1.5,
        text: 'This is test text pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat  justo enim.…',
        shares: 743,
        facebookCount: 121,
        instaCount: 5,
        count: 1,
        isBasic: true,
        firstArticlePageImg: '/images/site-cont-article-col-img1.jpg',
    },
    {
        id: 3,
        articleReviews: [
            {
                name: 'Viktor',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 3',
            },
        ],
        image: '/images/site-cont-article-col-img3.jpg',
        hrefArticle: 'dictum dapibus',
        hrefAuthor: 'elliot_page',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Anderson',
        authorDescription:
            'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius tincidunt nec aliquam arcu tempus vel laoreet lorem.',
        isElliotArticle: true,
        months: 'November',
        day: 3,
        year: 2002,
        category: 'Vulputate',
        hrefCategory: 'vulputate_category',
        isVulputate: true,
        title: 'Dictum Dapibus Nam Massa Veni <span class="font-weight-400">Tempus</span>',
        views: '1.6',
        minuteRead: 4,
        text: 'This is test text pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat  justo enim.…',
        shares: 71,
        facebookCount: 1231,
        instaCount: 23,
        count: 1,
        isBasic: true,
        isMenuCategoryVulputate: true,
        isJoannaPageLatest: true,
        itemNumber: '01',
        firstArticlePageImg: '/images/site-cont-article-col-img2.jpg',
    },
    {
        id: 4,
        articleReviews: [
            {
                name: 'Lida',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 4',
            },
        ],
        image: '/images/site-cont-article-col-img4.jpg',
        hrefArticle: 'nisi dolor',
        hrefAuthor: 'joanna_page',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        authorDescription:
            'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
        isJoannaArticle: true,
        months: 'December',
        day: 4,
        year: 2003,
        category: 'Maecenas',
        hrefCategory: 'maecenas_category',
        title: 'Nisi Dolor Etiam Eleifend Amet <span class="font-weight-400">Nam Penatibus</span>',
        views: '3.2',
        minuteRead: 2,
        text: 'This is test text pulvinar montes lorem et pede dis it`s just a text dolor pretium donec dictum.Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        firstArticlePageImg: '/images/site-cont-article-col-img3.jpg',
    },
    {
        id: 5,
        articleReviews: [
            {
                name: 'Sergiy',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 5',
            },
        ],
        image: '/images/site-cont-article-col-img5.jpg',
        hrefArticle: 'nunc libero',
        hrefAuthor: 'joanna_page',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        authorDescription:
            'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
        isJoannaArticle: true,
        months: 'January',
        day: 5,
        year: 2004,
        category: 'Vulputate',
        hrefCategory: 'vulputate_category',
        isVulputate: true,
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
        firstArticlePageImg: '/images/site-cont-article-col-img4.jpg',
    },
    {
        id: 6,
        articleReviews: [
            {
                name: 'Ira',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 6',
            },
        ],
        image: '/images/site-cont-article-col-img6.jpg',
        hrefArticle: 'sapien lorem',
        hrefAuthor: 'elliot_page',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Anderson',
        authorDescription:
            'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius tincidunt nec aliquam arcu tempus vel laoreet lorem.',
        isElliotArticle: true,
        months: 'February',
        day: 6,
        year: 2005,
        category: 'Etiam',
        hrefCategory: 'etiam_category',
        isEtiam: true,
        title: 'Sapien Lorem Libero Augue <span class="font-weight-400">Tincidunt</span>',
        views: '3.2',
        minuteRead: 2,
        text: 'This is test text pulvinar montes text dolor pretium donec dictum lorem et pede dis it`s just a text dolor pretium donec dictum.Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        isMenuCategoryEtiam: true,
        isJoannaPageLatest: true,
        itemNumber: '02',
        firstArticlePageImg: '/images/site-cont-article-col-img5.jpg',
    },
    {
        id: 7,
        articleReviews: [
            {
                name: 'Liza',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 7',
            },
        ],
        image: '/images/site-cont-article-col-img7.jpg',
        hrefArticle: 'dapibus viverra',
        hrefAuthor: 'elliot_page',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Anderson',
        authorDescription:
            'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius tincidunt nec aliquam arcu tempus vel laoreet lorem.',
        isElliotArticle: true,
        months: 'Marth',
        day: 7,
        year: 2006,
        category: 'Etiam',
        hrefCategory: 'etiam_category',
        isEtiam: true,
        title: 'Dapibus Viverra Eleifend Rhoncus <span class="font-weight-400">Eros Aliquam Vivamus</span>',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        isMenuCategoryEtiam: true,
        firstArticlePageImg: '/images/site-cont-article-col-img6.jpg',
    },
    {
        id: 8,
        articleReviews: [
            {
                name: 'Oleg',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 8',
            },
        ],
        image: '/images/site-cont-article-col-img8.jpg',
        hrefArticle: 'rhoncus ante',
        hrefAuthor: 'joanna_page',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        authorDescription:
            'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
        isJoannaArticle: true,
        months: 'April',
        day: 8,
        year: 2007,
        category: 'Aenean Eleifend',
        hrefCategory: 'aenean_category',
        isAenean: true,
        title: 'Rhoncus Ante Sit Nulla Sed Tellus <span class="font-weight-400">Blandit Eleifend</span>',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        isMenuCategoryAenenan: true,
        isElliotPageLatest: true,
        itemNumber: '01',
        firstArticlePageImg: '/images/site-cont-article-col-img7.jpg',
    },
    {
        id: 9,
        articleReviews: [
            {
                name: 'Igor',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 9',
            },
        ],
        image: '/images/site-cont-article-col-img9.jpg',
        hrefArticle: 'etiam ante',
        hrefAuthor: 'joanna_page',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        authorDescription:
            'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
        isJoannaArticle: true,
        months: 'May',
        day: 9,
        year: 2008,
        category: 'Aenean Eleifend',
        hrefCategory: 'aenean_category',
        isAenean: true,
        title: 'Etiam Ante Sem Enim Ipsum <span class="font-weight-400">Amet Eros Ligula Vivamus</span>',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        isMenuCategoryAenenan: true,
        isElliotPageLatest: true,
        itemNumber: '02',
        firstArticlePageImg: '/images/site-cont-article-col-img8.jpg',
    },
    {
        id: 10,
        articleReviews: [
            {
                name: 'Natali',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 10',
            },
        ],
        image: '/images/site-cont-article-col-img10.jpg',
        hrefArticle: 'justo eleifend',
        hrefAuthor: 'elliot_page',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Andersen',
        authorDescription:
            'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius tincidunt nec aliquam arcu tempus vel laoreet lorem.',
        isElliotArticle: true,
        months: 'June',
        day: 10,
        year: 2009,
        category: 'Maecenas',
        hrefCategory: 'maecenas_category',
        title: 'Justo Eleifend Venenatis Rhoncus <span class="font-weight-400">Natoque Pretium Etiam</span>',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        firstArticlePageImg: '/images/site-cont-article-col-img9.jpg',
    },
    {
        id: 11,
        articleReviews: [
            {
                name: 'Evgenia',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 11',
            },
        ],
        image: '/images/site-cont-article-col-img11.jpg',
        hrefArticle: 'pellentesque porttitor',
        hrefAuthor: 'elliot_page',
        imageAuthor: '/images/author-eliot.jpeg',
        authorName: 'Elliot Andersen',
        authorDescription:
            'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius tincidunt nec aliquam arcu tempus vel laoreet lorem.',
        isElliotArticle: true,
        months: 'July',
        day: 11,
        year: 2010,
        category: 'Vulputate',
        hrefCategory: 'vulputate_category',
        isVulputate: true,
        title: 'Pellentesque porttitor nec amet',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        firstArticlePageImg: '/images/site-cont-article-col-img10.jpg',
    },
    {
        id: 12,
        articleReviews: [
            {
                name: 'Sam',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 12',
            },
        ],
        image: '/images/site-cont-article-col-img12.jpg',
        hrefArticle: 'integer maecenas',
        hrefAuthor: 'joanna_page',
        imageAuthor: '/images/author-joanna.jpeg',
        authorName: 'Joanna Wellick',
        authorDescription:
            'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
        isJoannaArticle: true,
        months: 'August',
        day: 12,
        year: 2011,
        category: 'Aenean Eleifend',
        hrefCategory: 'aenean_category',
        isAenean: true,
        title: 'Integer Maecenas Eget Viverra',
        views: '3.2',
        minuteRead: 60,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        shares: 566,
        facebookCount: 231,
        instaCount: 69,
        count: 1,
        isBasic: true,
        firstArticlePageImg: '/images/site-cont-article-col-img11.jpg',
    },
    // це були основні статті
    // далі статті latest
    {
        id: 14,
        articleReviews: [
            {
                name: 'Linda',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 14',
            },
        ],
        hrefArticle: 'vitae nec ',
        hrefAuthor: 'elliot_page',
        authorName: 'Elliot Anderson',
        authorDescription:
            'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius tincidunt nec aliquam arcu tempus vel laoreet lorem.',
        isElliotArticle: true,
        months: 'October',
        day: 30,
        year: 2023,
        title: 'Vitae Nec Adipiscing Quis <span class="font-weight-400">Semper Quam Tellus Nascetur</span>',
        image: '/images/sec-post-article-col-img3.jpg',
        itemNumber: '01',
        count: 1,
        isLatest: true,
        isSectionPostColumn: true,
        views: '3.4',
        shares: 54,
        category: 'Maecenas',
        hrefCategory: 'maecenas_category',
        firstArticlePageImg: '/images/site-cont-article-col-img12.jpg',
    },
    {
        id: 15,
        articleReviews: [
            {
                name: 'Bob',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 15',
            },
        ],
        hrefArticle: 'tempus vitae ',
        hrefAuthor: 'joanna_page',
        authorName: 'Joanna Wellick',
        authorDescription:
            'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
        isJoannaArticle: true,
        months: 'October',
        day: 16,
        year: 2024,
        title: 'Tempus Vitae Quis Rutrum <span class="font-weight-400"> Vel Ut Eget Eu Pulvinar Blandit</span>',
        image: '/images/sec-post-article-col-img5.jpg',
        itemNumber: '02',
        count: 1,
        isLatest: true,
        isSectionPostColumn: true,
        views: '2.9',
        shares: 900,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        category: 'Rhoncus',
        hrefCategory: 'aenean_category',
        isAenean: true,
        isMenuCategoryAenenan: true,
        imageAuthor: '/images/author-joanna.jpeg',
        minuteRead: 60,
        facebookCount: 231,
        instaCount: 69,
        firstArticlePageImg: '/images/site-cont-article-col-img13.jpg',
    },
    {
        id: 16,
        articleReviews: [
            {
                name: 'Derek',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 16',
            },
        ],
        hrefArticle: 'et tellus ',
        hrefAuthor: 'joanna_page',
        authorName: 'Joanna Wellick',
        authorDescription:
            'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
        isJoannaArticle: true,
        months: 'October',
        day: 13,
        year: 2024,
        title: 'Et Tellus Id Magnis Nisi <span class="font-weight-400"> Maecenas Eget Nam </span>',
        image: '/images/sec-post-article-col-img4.jpg',
        itemNumber: '03',
        count: 1,
        isLatest: true,
        isSectionPostColumn: true,
        views: '3.2',
        shares: 1212,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        category: 'Aenean Eleifend',
        hrefCategory: 'aenean_category',
        isAenean: true,
        isMenuCategoryAenenan: true,
        imageAuthor: '/images/author-joanna.jpeg',
        minuteRead: 60,
        facebookCount: 231,
        instaCount: 69,
        isElliotPageLatest: true,
        firstArticlePageImg: '/images/site-cont-article-col-img14.jpg',
    },
    // sectionPostColumn
    {
        id: 17,
        articleReviews: [
            {
                name: 'Bill',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 17',
            },
        ],
        image: '/images/sec-post-article-col-img1.jpg',
        category: 'Etiam',
        hrefCategory: 'etiam_category',
        isEtiam: true,
        title: 'Quis Nascetur Aenean Ipsum Vici',
        hrefArticle: 'quis nasqetur',
        hrefAuthor: 'joanna_page',
        authorName: 'Joanna Wellick',
        authorDescription:
            'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
        isJoannaArticle: true,
        views: '2.8',
        shares: 757,
        count: 1,
        isSectionPostColumn: true,
        isMenuCategoryEtiam: true,
        months: 'October',
        day: 13,
        year: 2024,
        imageAuthor: '/images/author-joanna.jpeg',
        minuteRead: 60,
        facebookCount: 231,
        instaCount: 69,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        firstArticlePageImg: '/images/site-cont-article-col-img4.jpg',
    },
    {
        id: 18,
        articleReviews: [
            {
                name: 'Suzan',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 18',
            },
        ],
        image: '/images/sec-post-article-col-img2.jpg',
        category: 'Vulputate',
        hrefCategory: 'vulputate_category',
        title: 'Tellus Etiam Commodo <span class="font-weight-400"> Pellentesque Nec Elit Quis Massa</span>',
        hrefArticle: 'tellus etiam',
        hrefAuthor: 'elliot_page',
        authorName: 'Elliot Anderson',
        authorDescription:
            'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius tincidunt nec aliquam arcu tempus vel laoreet lorem.',
        isElliotArticle: true,
        views: '2.1',
        shares: 862,
        count: 1,
        isSectionPostColumn: true,
        isMenuCategoryVulputate: true,
        isVulputate: true,
        imageAuthor: '/images/author-eliot.jpeg',
        months: 'August',
        day: 12,
        year: 2011,
        minuteRead: 60,
        facebookCount: 231,
        instaCount: 69,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        isJoannaPageLatest: true,
        itemNumber: '03',
        firstArticlePageImg: '/images/site-cont-article-col-img1.jpg',
    },
    // menuCategoryEtiam
    {
        id: 19,
        articleReviews: [
            {
                name: 'Jimmy',
                userImg: '/images/userImage.png',
                text: 'It`s  review in id 19',
            },
        ],
        image: '/images/image-1.jpg',
        hrefArticle: 'maecenas tincidunt',
        title: 'Maecenas Tincidunt Eget Libero <span class="font-weight-400">Massa Vitae</span>',
        views: '10',
        count: 1,
        isMenuCategoryEtiam: true,
        isEtiam: true,
        category: 'Etiam',
        hrefCategory: 'etiam_category',
        hrefAuthor: 'joanna_page',
        authorName: 'Joanna Wellick',
        authorDescription:
            'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
        isJoannaArticle: true,
        months: 'October',
        day: 13,
        year: 2024,
        imageAuthor: '/images/author-joanna.jpeg',
        minuteRead: 60,
        facebookCount: 231,
        instaCount: 69,
        shares: 862,
        text: 'This is test text pulvinar  pede dis it`s just a text dolor pretium .Harry Potter Jack Daniels John Wick Vici consequat  justo enim.…',
        firstArticlePageImg: '/images/site-cont-article-col-img3.jpg',
    },
]

export const getArticlesObject = (array: Article[]) =>
    array.reduce(
        (object, article) => ({ ...object, [article.id]: article }),
        {}
    )
