import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
  type?: string;
}

const Button = ({ icon, text, type }: ButtonProps) => {
  return (
    <div
      style={{
        borderRadius: "5px",
        padding: "4px 12px",
        width: "fit-content",
        alignItems: "center",
        display: "flex",
        backgroundColor: type === "primary" ? "white" : "rgba(81, 84, 81, 1)",
      }}
    >
      <div className="h-[30px] w-[30px] content-center">{icon}</div>
      <p
        className={`text-[18px] ml-3 ${
          type === "primary" ? "text-black" : "text-white"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Button;
