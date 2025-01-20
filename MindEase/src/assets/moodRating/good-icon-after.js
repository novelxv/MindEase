import { Filter } from "lucide-react"
import * as React from "react"
import Svg, {
  G,
  Polygon,
  Circle,
  Path,
  Defs,
  RadialGradient,
  Stop
} from "react-native-svg"

function GoodAfter(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_i_20_538)">
        <Circle cx={24} cy={24} r={24} fill="url(#paint0_radial_20_538)" />
      </G>
      <Path
        d="M20 30.5v0c2.25 3 6.75 3 9 0v0"
        stroke="#DE6102"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M14 23v0c.734-2.494 4.266-2.494 5 0v0M29 23v0c.8-2.402 4.2-2.402 5 0v0"
        stroke="#BE3858"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <G filter="url(#filter1_f_20_538)">
        <rect x={31} y={27} width={5} heiGht={5} rx={2.5} fill="#F72859" />
      </G>
      <G filter="url(#filter2_f_20_538)">
        <rect x={12} y={27} width={5} heiGht={5} rx={2.5} fill="#F72859" />
      </G>
      <Defs>
        <Filter
          id="filter0_i_20_538"
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
          <feBlend in2="shape" result="effect1_innerShadow_20_538" />
        </Filter>
        <Filter
          id="filter1_f_20_538"
          x={25}
          y={21}
          width={17}
          height={17}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={3}
            result="effect1_foregroundBlur_20_538"
          />
        </Filter>
        <Filter
          id="filter2_f_20_538"
          x={6}
          y={21}
          width={17}
          height={17}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={3}
            result="effect1_foregroundBlur_20_538"
          />
        </Filter>
        <radialGradient
          id="paint0_radial_20_538"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(125.293 19.5 10.088) scale(54.5206)"
        >
          <Stop stopColor="#FFFAEB" />
          <Stop offset={0.21875} stopColor="#F5D163" />
          <Stop offset={0.494792} stopColor="#FAD967" />
          <Stop offset={0.791667} stopColor="#F2B456" />
          <Stop offset={1} stopColor="#F78228" />
        </radialGradient>
      </Defs>
    </Svg>
  )
}

export default GoodAfter
