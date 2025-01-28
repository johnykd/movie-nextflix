import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen mr-20">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
  );
};

export default Loading;
