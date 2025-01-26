import React from "react";
import TopTenIcon from "../../components/icons/TopTen";
import NSeries from "../../components/icons/NSeries";
import Button from "@/app/components/Button";
import Polygon from "@/app/components/icons/Polygon";
import InfoIcon from "@/app/components/icons/Info";
import TitleIcon1 from "@/app/components/icons/TitleIcon1";
import PopularMovieList from "./PopularMovieList";

const MovieItem = () => {
  const mockData = [
    {
      id: 1,
      title: "Devil in Ohio",
      description:
        "Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in, putting her own family — and life — in danger",
      imageUrl: "/images/movie1.png",
      titleIcon: <TitleIcon1 />,
    },
    {
      id: 2,
      title: "The Queen's Gambit",
      description: "In a 1950s orphanage, a young",
      imageUrl: "/images/movie2.png",
    },
    {
      id: 3,
      title: "The Queen's Gambit",
      description: "In a 1950s orphanage, a young",
      imageUrl: "/images/movie3.png",
    },
    {
      id: 4,
      title: "The Queen's Gambit",
      description: "In a 1950s orphanage, a young",
      imageUrl: "/images/movie4.png",
    },
    {
      id: 5,
      title: "The Queen's Gambit",
      description: "In a 1950s orphanage, a young",
      imageUrl: "/images/movie5.png",
    },
    {
      id: 6,
      title: "The Queen's Gambit",
      description: "In a 1950s orphanage, a young",
      imageUrl: "/images/movie6.png",
    },
    {
      id: 7,
      title: "The Queen's Gambit",
      description: "In a 1950s orphanage, a young",
      imageUrl: "/images/movie7.png",
    },
    {
      id: 8,
      title: "The Queen's Gambit",
      description: "In a 1950s orphanage, a young",
      imageUrl: "/images/movie8.png",
    },
  ];
  return (
    <div
      className="bg-cover bg-center w-full h-screen flex flex-col"
      style={{ backgroundImage: `url(${mockData[0].imageUrl})` }}
    >
      <div className="ml-12 mt-40 text-white max-w-[700px]">
        <NSeries />
        {mockData[0].titleIcon}
        <div className="flex items-center mt-10 text-2xl ">
          <TopTenIcon />
          <h1 className="ml-4">#1 in TV Shows Today</h1>
        </div>
        <p className="my-4 text-[30px]">{mockData[0].description}</p>
        <div className="flex space-x-4">
          <Button icon={<Polygon />} text="Play" type="primary" />
          <Button icon={<InfoIcon />} text="More Info" />
        </div>
      </div>

      {/* // This is the MovieList component at footer */}
      <div className="mt-auto ml-12 text-[white] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(20,20,20,0)]">
        <PopularMovieList itemList={mockData} />
      </div>
    </div>
  );
};

export default MovieItem;
