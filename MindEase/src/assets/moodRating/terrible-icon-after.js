import * as React from "react"

function TerribleAfter(props) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_i_20_499)">
        <circle cx={24} cy={24} r={24} fill="url(#paint0_radial_20_499)" />
      </g>
      <path
        d="M17 33.5l1.843-1.843a8 8 0 0111.314 0L32 33.5"
        stroke="#DE6102"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M11 16l8 3M36 16l-8 3M14 23l.379.379a3 3 0 004.242 0L19 23M29 23l.379.379a3 3 0 004.242 0L34 23"
        stroke="#BE3858"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_i_20_499"
          x={-1}
          y={0}
          width={49}
          height={50}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-1} dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.980183 0 0 0 0 0.920833 0 0 0 0.6 0" />
          <feBlend in2="shape" result="effect1_innerShadow_20_499" />
        </filter>
        <radialGradient
          id="paint0_radial_20_499"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(125.293 19.5 10.088) scale(54.5206)"
        >
          <stop stopColor="#FFFAEB" />
          <stop offset={0.21875} stopColor="#F5D163" />
          <stop offset={0.494792} stopColor="#FAD967" />
          <stop offset={0.791667} stopColor="#F2B456" />
          <stop offset={1} stopColor="#F78228" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default TerribleAfter
