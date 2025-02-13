import * as React from "react"
import { SVGProps } from "react"
const CloverIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <g stroke="#0891B2" strokeWidth={4.991} clipPath="url(#a)">
      <path
        strokeOpacity={0.5}
        d="M26.667 26.667h26.666v26.666H26.667V26.667Z"
      />
      <path d="m53.333 53.337 10-.002c5.523 0 10.001 4.476 10.002 9.998 0 5.523-4.476 10.001-9.999 10.002-5.522 0-10-4.475-10.001-9.998l-.002-10ZM26.67 53.337l-10-.002c-5.523 0-10 4.476-10.002 9.998 0 5.523 4.476 10.001 9.999 10.002 5.522 0 10-4.475 10.001-9.998l.002-10ZM53.333 26.667l10 .001c5.523.001 10.001-4.475 10.002-9.998 0-5.523-4.476-10-9.999-10.002-5.522 0-10 4.476-10.001 9.999l-.002 10ZM26.67 26.667l-10 .001c-5.523.001-10-4.475-10.002-9.998 0-5.523 4.476-10 9.999-10.002 5.522 0 10 4.476 10.001 9.999l.002 10Z" />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={80} height={80} fill="#fff" rx={16.636} />
      </clipPath>
    </defs>
  </svg>
)
export default CloverIcon
