import React from "react";
import Image from "next/image";
import { IMovieProps } from "@/app/type/movie";
import MobileMenuAction from "./MobileMenuAction";

const PopularMovieList = ({ itemList }: IMovieProps) => {
  return (
    <div>
      {/* Desktop */}
      <h1 className="mt-20 mb-3 text-[24px]">Popular on Netflix</h1>
      <div className="hidden sm:flex gap-2 mb-10 overflow-x-scroll">
        {itemList.slice(1).map((movie) => (
          <div key={movie.id} className="flex-shrink-0 h-[219px] w-[389px]">
            <Image
              src={movie.imageUrl}
              alt={movie.title}
              width={389}
              height={219}
            />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <MobileMenuAction />
        <h1 className="mb-1 mt-3 text-[20px] ml-[-40px]">Popular on Netflix</h1>
        <div className="flex gap-2 mb-10 overflow-x-scroll ml-[-40px]">
          {itemList.slice(1).map((movie) => (
            <div key={movie.id} className="flex-shrink-0 h-[219px] w-[135px]">
              <Image
                src={movie.imageUrl}
                alt={movie.title}
                width={135}
                height={219}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovieList;
