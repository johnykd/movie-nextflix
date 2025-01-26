"use client";
import React from "react";
import TopTenIcon from "../../components/icons/TopTen";
import NSeries from "../../components/icons/NSeries";
import Button from "@/app/components/Button";
import Polygon from "@/app/components/icons/Polygon";
import InfoIcon from "@/app/components/icons/Info";
import PopularMovieList from "./PopularMovieList";
import { useQuery } from "@apollo/client";
import { SEARCH_MOVIES } from "@/app/graphQl/movie";
import TitleIcon1 from "@/app/components/icons/TitleIcon1";

const MovieItem = () => {
  const { data, loading, error } = useQuery(SEARCH_MOVIES, {
    variables: { query: "the son" },
  });

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen mr-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  if (error) return <div>Error</div>;
  const movieList = data.items;
  const movie = {
    id: 1,
    title: "Devil in Ohio",
    description:
      "Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in, putting her own family — and life — in danger",
    imageUrl: "/images/movie1.png",
    titleIcon: <TitleIcon1 />,
  };

  return (
    <div
      className="bg-cover bg-center w-full h-screen flex flex-col"
      style={{ backgroundImage: `url(${movie?.imageUrl})` }}
    >
      <div className="ml-12 mt-40 text-white max-w-[700px]">
        <NSeries />
        {movie?.titleIcon}
        <div className="flex items-center mt-10 text-2xl ">
          <TopTenIcon />
          <h1 className="ml-4">#1 in TV Shows Today</h1>
        </div>
        <p className="my-4 text-[30px]">{movie?.description}</p>
        <div className="flex space-x-4">
          <Button icon={<Polygon />} text="Play" type="primary" />
          <Button icon={<InfoIcon />} text="More Info" />
        </div>
      </div>

      {/* // This is the MovieList component at footer */}
      <div className="mt-auto ml-12 text-[white] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(20,20,20,0)]">
        <PopularMovieList itemList={movieList} />
      </div>
    </div>
  );
};

export default MovieItem;
