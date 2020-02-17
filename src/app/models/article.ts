export class ArticleModel {
  constructor(
    public id: string = '',
    public urlToImage: string = '',
    public url: string = '',
    public title: string = '',
    public description: string = '',
    public publishedAt: string = '',
    public createdByMe?: boolean
  ) {
    this.id = id;
    this.urlToImage = urlToImage;
    this.title = title;
    this.description = description;
    this.publishedAt = publishedAt;
    this.createdByMe = createdByMe;
  }
}
