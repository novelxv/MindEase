import { Filter } from "lucide-react"
import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  RadialGradient,
  Stop
} from "react-native-svg"

function BadAfter(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_i_20_512)">
        <Circle cx={24} cy={24} r={24} fill="url(#paint0_radial_20_512)" />
      </G>
      <Path
        d="M19 33.5v0c2.725-3.716 8.275-3.716 11 0v0"
        stroke="#DE6102"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M13 23l.594.424a5 5 0 005.812 0L20 23M29 23l.594.424a5 5 0 005.812 0L36 23"
        stroke="#BE3858"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Defs>
        <Filter
          id="filter0_i_20_512"
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
          <feBlend in2="shape" result="effect1_innerShadow_20_512" />
        </Filter>
        <radialGradient
          id="paint0_radial_20_512"
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
      </Defs>
    </Svg>
  )
}

export default BadAfter
