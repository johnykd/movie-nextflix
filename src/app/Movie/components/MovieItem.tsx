import React from "react";
import TopTenIcon from "../../components/icons/TopTen";
import NSeries from "../../components/icons/NSeries";
import Button from "@/app/components/Button";
import Polygon from "@/app/components/icons/Polygon";
import InfoIcon from "@/app/components/icons/Info";
import MovieList from "./MovieList";
import TitleLogo4 from "@/app/components/icons/titleMovie4";

const MovieItem = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-screen flex flex-col"
      style={{ backgroundImage: "url(/images/image4.png)" }}
    >
      <div className="ml-12 mt-40 text-white max-w-[500px]">
        <NSeries />
        <TitleLogo4 />
        <div className="flex items-center mt-4 text-2xl ">
          <TopTenIcon />
          <h1 className="ml-4">#1 in TV Shows Today</h1>
        </div>
        <p className="my-4">
          Determined to protect a young patient who escaped a mysterious cult, a
          psychiatrist takes the girl in, putting her own family — and life — in
          danger.
        </p>
        <div className="flex space-x-4">
          <Button icon={<Polygon />} text="Play" type="primary" />
          <Button icon={<InfoIcon />} text="More Info" />
        </div>
      </div>
      <div className="mt-auto ml-12 text-[white] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(20,20,20,0)]">
        <MovieList />
      </div>
    </div>
  );
};

export default MovieItem;
