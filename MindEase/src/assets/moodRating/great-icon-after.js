import { Filter } from "lucide-react";
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
function GreatAfter(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_i_20_551)">
        <Circle cx={24} cy={24} r={24} fill="url(#paint0_radial_20_551)" />
      </G>
      <Path
        d="M18.298 30.725L16.5 30.5A7.5 7.5 0 0024 38h1a7.5 7.5 0 007.5-7.5l-1.798.225a50 50 0 01-12.404 0z"
        fill="#F72859"
        stroke="#F72859"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M12 23v0c1.287-3.125 5.713-3.125 7 0v0M29 23v0c1.387-2.972 5.613-2.972 7 0v0"
        stroke="#BE3858"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <G filter="url(#filter1_f_20_551)">
        <rect x={31} y={27} width={5} height={5} rx={2.5} fill="#F72859" />
      </G>
      <G filter="url(#filter2_f_20_551)">
        <rect x={12} y={27} width={5} height={5} rx={2.5} fill="#F72859" />
      </G>
      <Path
        d="M43.04 11.322c.278-.963 1.642-.963 1.92 0l.096.33a1 1 0 001.2.693l.32-.08c.978-.241 1.66.952.954 1.672l-.197.2a1 1 0 000 1.4l.197.201c.706.72.024 1.913-.954 1.671l-.23-.056a1 1 0 00-1.221.782l-.143.743c-.207 1.082-1.757 1.082-1.964 0l-.143-.743a1 1 0 00-1.222-.782l-.229.056c-.978.242-1.66-.951-.954-1.67l.197-.201a1 1 0 000-1.4l-.197-.201c-.706-.72-.024-1.913.954-1.671l.32.079a1 1 0 001.2-.693l.095-.33z"
        fill="url(#paint1_linear_20_551)"
      />
      <Defs>
        <Filter
          id="filter0_i_20_551"
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
          <feBlend in2="shape" result="effect1_innerShadow_20_551" />
        </Filter>
        <Filter
          id="filter1_f_20_551"
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
            result="effect1_foregroundBlur_20_551"
          />
        </Filter>
        <Filter
          id="filter2_f_20_551"
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
            result="effect1_foregroundBlur_20_551"
          />
        </Filter>
        <radialGradient
          id="paint0_radial_20_551"
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
        <linearGradient
          id="paint1_linear_20_551"
          x1={44}
          y1={10.5}
          x2={44}
          y2={19.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#FFFAE8" />
        </linearGradient>
      </Defs>
    </Svg>
  )
}

export default GreatAfter;
