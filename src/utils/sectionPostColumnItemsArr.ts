export type SectionPostColumnItem={
    id:number
    image:string
    category:string
    title:string
    hrefCategory:string
    hrefAuthor:string
    views:number
    shares:number
    authorName:string
}

export const sectionColumnItemsArr:SectionPostColumnItem[]=[{
    id:1,
    image:'/images/sec-post-article-col-img1.jpg',
    category:'Etiam',
    title:'Quis Nascetur Aenean Ipsum Vici',
    hrefCategory:'quis nasqetur',
    hrefAuthor:"joanna-author",
    authorName:'Joanna Wellick',
    views:2.8,
    shares:757
},
{
    id:2,
    image:'/images/sec-post-article-col-img2.jpg',
    category:'Vulputate',
    title:'Tellus Etiam Commodo Pellentesque Nec Elit Quis Massa',
    hrefCategory:'tellus etiam',
    hrefAuthor:"elliot-author",
    authorName:'Elliot Anderson',
    views:2.1,
    shares:862
},{
    id:3,
    image:'/images/sec-post-article-col-img3.jpg',
    category:'Maecenas',
    title:'Vitae Nec Adipiscing Quis Semper Quam Tellus Nascetur',
    hrefCategory:'vitae nec',
    hrefAuthor:"elliot-author",
    authorName:'Elliot Anderson',
    views:1.3,
    shares:777
},{
    id:4,
    image:'/images/sec-post-article-col-img4.jpg',
    category:'Rhoncus',
    title:'Et Tellus Id Magnis Nisi Maecenas Eget Nam',
    hrefCategory:'et tellus',
    hrefAuthor:"joanna-author",
    authorName:'Joanna Wellick',
    views:2.9,
    shares:900
},{
    id:5,
    image:'/images/sec-post-article-col-img5.jpg',
    category:'Aenean Eleifend',
    title:'Tempus Vitae Quis Rutrum Vel Ut Eget Eu Pulvinar Blandit',
    hrefCategory:'tempus vitae',
    hrefAuthor:"elliot-author",
    authorName:'Elliot Anderson',
    views:3.2,
    shares:1212
}]