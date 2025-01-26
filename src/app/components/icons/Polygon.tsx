import React, { forwardRef } from "react";

const Polygon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(() => {
  return (
    <svg
      width="37"
      height="41"
      viewBox="0 0 37 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.8471 18.7511C37.2202 19.5127 37.2202 21.4873 35.8471 22.2489L3.72016 40.0701C2.38711 40.8095 0.750002 39.8455 0.750002 38.3211L0.750004 2.67889C0.750004 1.15449 2.38712 0.190498 3.72016 0.929948L35.8471 18.7511Z"
        fill="black"
      />
    </svg>
  );
});

Polygon.displayName = "Polygon";

export default Polygon;
