import React from "react";
import Image from "next/image";
import { IMovieProps } from "@/app/type/movie";

const PopularMovieList = ({ itemList }: IMovieProps) => {
  return (
    <div>
      <h1 className="mt-20 mb-3 text-[24px]">Popular on Netflix</h1>
      <div className="flex gap-2 mb-10 overflow-x-scroll">
        {itemList.slice(1).map((movie) => (
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

export default PopularMovieList;
