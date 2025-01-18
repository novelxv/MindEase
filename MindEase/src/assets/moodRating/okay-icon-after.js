import * as React from "react"

function OkayAfter(props) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_i_20_525)">
        <circle cx={24} cy={24} r={24} fill="url(#paint0_radial_20_525)" />
      </g>
      <path
        d="M19 33.5h11"
        stroke="#DE6102"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <circle cx={32} cy={24} r={2} fill="#BE3858" />
      <circle cx={32} cy={24} r={2} fill="#BE3858" />
      <circle cx={32} cy={24} r={2} fill="#BE3858" />
      <circle cx={17} cy={24} r={2} fill="#BE3858" />
      <circle cx={17} cy={24} r={2} fill="#BE3858" />
      <circle cx={17} cy={24} r={2} fill="#BE3858" />
      <defs>
        <filter
          id="filter0_i_20_525"
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
          <feBlend in2="shape" result="effect1_innerShadow_20_525" />
        </filter>
        <radialGradient
          id="paint0_radial_20_525"
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

export default OkayAfter
