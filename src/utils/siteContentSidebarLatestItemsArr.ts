export type SiteContentLatestItem={
    id:number,
    hrefArticle:string,
    hrefAuthor:string,
    authorName:string,
    months:string,
    day:number,
    year:number,
    title:string,
    image:string
    itemNumber:string
}

export const  siteContentSidebarLatestArr:SiteContentLatestItem[]=[{
    id:1,
    hrefArticle:'vitae nec ',
    hrefAuthor:"elliot-author",
    authorName:'Elliot Anderson',
    months:'October',
    day:30,
    year:2023,
    title:'Vitae Nec Adipiscing Quis Semper Quam Tellus Nascetur',
    image:"/images/sec-post-article-col-img3.jpg",
    itemNumber:'01'
},{
    id:2,
    hrefArticle:'et tellus ',
    hrefAuthor:"joanna-author",
    authorName:'Joanna Wellick',
    months:'October',
    day:13,
    year:2024,
    title:'Et Tellus Id Magnis Nisi Maecenas Eget Nam',
    image:"/images/sec-post-article-col-img4.jpg",
    itemNumber:'02'
},{
    id:3,
    hrefArticle:'tempus vitae ',
    hrefAuthor:"joanna-author",
    authorName:'Joanna Wellick',
    months:'October',
    day:16,
    year:2024,
    title:'Tempus Vitae Quis Rutrum Vel Ut Eget Eu Pulvinar Blandit',
    image:"/images/sec-post-article-col-img5.jpg",
    itemNumber:'03'
}]