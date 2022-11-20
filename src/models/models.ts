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

export interface IServerResponse {
  articles: IArticle[];
  articlesCount: number;
}

export interface IInputs {
  username: string;
  email: string;
  password: string;
  passRepeat: string;
  terms: boolean;
}
