import Button from "@/app/components/Button";
import InfoIcon from "@/app/icons/Info";
import Polygon from "@/app/icons/Polygon";
import React from "react";

const MobileMenuAction = () => {
  return (
    <div className="flex flex-row justify-center gap-20 ">
      <InfoIcon />
      <Button
        icon={<Polygon width={24} height={24} />}
        text="Play"
        type="primary"
      />
      <InfoIcon />
    </div>
  );
};

export default MobileMenuAction;
