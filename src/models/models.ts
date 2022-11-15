export interface IAuthor {
  username: string;
  image: string;
  following: boolean;
}

export interface IArticle {
  slug?: string;
  title?: string;
  description?: string;
  body?: string;
  createdAt?: Date;
  updatedAt?: Date;
  tagList?: string[];
  favorited?: boolean;
  favoritesCount?: number;
  author?: IAuthor;
}

export interface ServerResponse {
  articles: IArticle[];
  articlesCount: number;
}
