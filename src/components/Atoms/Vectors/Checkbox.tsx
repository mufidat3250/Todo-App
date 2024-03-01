import { SVGProps } from "react";
const CheckboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="rgba(255,255,255,1)"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m10 15.17 9.192-9.191 1.414 1.414L10 17.999l-6.364-6.364 1.414-1.414 4.95 4.95Z" />
  </svg>
);
export default CheckboxIcon;

//
