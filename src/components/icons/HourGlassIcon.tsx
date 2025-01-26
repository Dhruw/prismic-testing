import * as React from "react"
import { SVGProps } from "react"
const HourGlassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <g stroke="#0891B2" strokeWidth={4.991} clipPath="url(#a)">
      <path d="M49.859 30.237 40 40l-9.859-9.763c-9.742-9.647-14.612-14.47-13.249-18.632.117-.358.263-.706.436-1.04C19.335 6.666 26.223 6.666 40 6.666c13.777 0 20.665 0 22.672 3.897.173.335.319.683.436 1.041 1.363 4.162-3.507 8.985-13.249 18.632Z" />
      <path
        strokeOpacity={0.5}
        d="M30.141 49.763 40 40l9.859 9.763C59.6 59.41 64.47 64.233 63.108 68.395a7.104 7.104 0 0 1-.435 1.04c-2.008 3.898-8.896 3.898-22.673 3.898-13.777 0-20.665 0-22.672-3.897a7.094 7.094 0 0 1-.436-1.041c-1.364-4.162 3.507-8.985 13.249-18.632Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={80} height={80} fill="#fff" rx={16.636} />
      </clipPath>
    </defs>
  </svg>
)
export default HourGlassIcon
