import React from "react";

interface props {
  params: {
    id: number;
  };
}

const MovieDetail = ({ params }: props) => {
  return (
    <div
      className="bg-cover bg-center w-full h-screen flex flex-col bg-background-default"
      style={{
        backgroundImage: `url(/images/movie${params.id}.png)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      MovieDetail{params.id}
    </div>
  );
};

export default MovieDetail;
