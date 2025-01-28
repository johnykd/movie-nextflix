import { gql } from "@apollo/client";

export const SEARCH_MOVIES = gql`
  query SearchMovies($query: String!) {
    items: searchMovies(query: $query) {
      id
      title
      year
      imageUrl
    }
  }
`;

export const FIND_MOVIE_BY_ID = gql`
  query findMovieById($id: String!) {
    items: findMovieById(id: $id) {
      id
      title
      description
      imageUrl
    }
  }
`;

// const mockData = [
//   {
//     id: 1,
//     title: "Devil in Ohio",
//     description:
//       "Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in, putting her own family — and life — in danger",
//     imageUrl: "/images/movie1.png",
//     titleIcon: <TitleIcon1 />,
//   },
//   {
//     id: 2,
//     title: "The Queen's Gambit",
//     description: "In a 1950s orphanage, a young",
//     imageUrl: "/images/movie2.png",
//   },
//   {
//     id: 3,
//     title: "The Queen's Gambit",
//     description: "In a 1950s orphanage, a young",
//     imageUrl: "/images/movie3.png",
//   },
//   {
//     id: 4,
//     title: "The Queen's Gambit",
//     description: "In a 1950s orphanage, a young",
//     imageUrl: "/images/movie4.png",
//   },
//   {
//     id: 5,
//     title: "The Queen's Gambit",
//     description: "In a 1950s orphanage, a young",
//     imageUrl: "/images/movie5.png",
//   },
//   {
//     id: 6,
//     title: "The Queen's Gambit",
//     description: "In a 1950s orphanage, a young",
//     imageUrl: "/images/movie6.png",
//   },
//   {
//     id: 7,
//     title: "The Queen's Gambit",
//     description: "In a 1950s orphanage, a young",
//     imageUrl: "/images/movie7.png",
//   },
//   {
//     id: 8,
//     title: "The Queen's Gambit",
//     description: "In a 1950s orphanage, a young",
//     imageUrl: "/images/movie8.png",
//   },
// ];
