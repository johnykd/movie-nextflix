import React from "react";
import Image from "next/image";

const MovieList = () => {
  const movies = [
    { id: 1, title: "Movie 1", imageUrl: "/images/movie1.png" },
    { id: 2, title: "Movie 2", imageUrl: "/images/movie2.png" },
    { id: 3, title: "Movie 3", imageUrl: "/images/movie3.png" },
    { id: 4, title: "Movie 4", imageUrl: "/images/movie4.png" },
    { id: 5, title: "Movie 5", imageUrl: "/images/movie5.png" },
    { id: 6, title: "Movie 6", imageUrl: "/images/movie6.png" },
    { id: 7, title: "Movie 7", imageUrl: "/images/movie7.png" },
  ];

  return (
    <div>
      <h1 className="mb-3 text-[24px]">Popular on Netflix</h1>
      <div className="flex gap-2 mb-10 overflow-x-scroll">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0">
            <Image
              src={movie.imageUrl}
              alt={movie.title}
              width={389}
              height={219}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
