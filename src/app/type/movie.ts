export interface IMovie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
export interface IMovieProps {
  itemList: IMovie[];
}
