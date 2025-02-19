import React, { forwardRef } from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}
const InfoIcon = forwardRef<SVGSVGElement, Props>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ width = 37, height = 41, ...props }, _ref) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M38 20.5263C38 30.1268 29.9917 38 20 38C10.0083 38 2 30.1268 2 20.5263C2 10.9258 10.0083 3.05261 20 3.05261C29.9917 3.05261 38 10.9258 38 20.5263Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          d="M19.6895 12.69C20.3195 12.69 20.8895 12.45 21.3695 12C21.8195 11.55 22.0595 10.98 22.0595 10.32C22.0595 9.66 21.8195 9.09 21.3695 8.64C20.8895 8.19 20.3195 7.95 19.6895 7.95C19.0595 7.95 18.4895 8.19 18.0395 8.64C17.5595 9.09 17.3195 9.66 17.3195 10.32C17.3195 10.98 17.5595 11.55 18.0395 12C18.4895 12.45 19.0595 12.69 19.6895 12.69ZM17.7695 30H21.5795V14.49H17.7695V30Z"
          fill="white"
        />
      </svg>
    );
  }
);

InfoIcon.displayName = "InfoIcon";

export default InfoIcon;
