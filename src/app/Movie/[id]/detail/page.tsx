"use client";
import Loading from "@/app/components/Loading";
import { FIND_MOVIE_BY_ID } from "@/app/graphQl/movie";
import TopTenIcon from "@/app/icons/TopTen";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import React from "react";

const MovieDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(FIND_MOVIE_BY_ID, {
    variables: { id: id },
  });

  const movie = data?.items || [];

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      className="bg-cover bg-center w-full h-screen flex flex-col bg-background-default"
      style={{
        backgroundImage: `url(${movie.imageUrl})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="ml-12 mt-20 text-text-primary max-w-[700px] bg-black bg-opacity-50 p-6 rounded-lg">
        <div className="flex items-center mt-10">
          <TopTenIcon />
          <h1 className="text-[28px] text-bold ml-4 title-large">
            {movie.title}
          </h1>
        </div>
        <p className="text-[20px] my-4 body-large">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
