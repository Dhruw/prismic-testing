import * as React from "react"
import { SVGProps } from "react"
const BarGraphIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <g stroke="#0891B2" strokeWidth={4.991} clipPath="url(#a)">
      <path strokeLinecap="round" d="M73.333 73.333H6.667" />
      <path
        strokeOpacity={0.5}
        d="M70 73.333v-25a5 5 0 0 0-5-5H55a5 5 0 0 0-5 5v25"
      />
      <path d="M50 73.333V16.667c0-4.714 0-7.071-1.465-8.536C47.072 6.667 44.715 6.667 40 6.667s-7.071 0-8.535 1.464C30 9.596 30 11.953 30 16.667v56.666" />
      <path
        strokeOpacity={0.5}
        d="M30 73.333V31.667a5 5 0 0 0-5-5H15a5 5 0 0 0-5 5v41.666"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={80} height={80} fill="#fff" rx={16.636} />
      </clipPath>
    </defs>
  </svg>
)
export default BarGraphIcon
