interface IAuthor {
  name: string;
}

interface IThumbnailImage {
  image_url: string;
}

interface IArt {
  title: string;
  author: IAuthor;
  thumbnail_image: IThumbnailImage;
}

interface ILike { 
  like: boolean;
  index: number;
}

interface IStoreState { 
  arts: IArt[];
  likes: ILike[];
}