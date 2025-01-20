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
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function TerribleBefore(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G opacity={0.9}>
        <G filter="url(#filter0_i_20_488)">
          <Circle cx={24} cy={24} r={24} fill="url(#paint0_radial_20_488)" />
        </G>
        <Path
          d="M17 33.5l1.843-1.843a8 8 0 0111.314 0L32 33.5M11 16l8 3M36 16l-8 3M14 23l.379.379a3 3 0 004.242 0L19 23M29 23l.379.379a3 3 0 004.242 0L34 23"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_20_488"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(125.293 19.5 10.088) scale(54.5206)"
        >
          <Stop stopColor="#323D45" />
          <Stop offset={0.21875} stopColor="#4B4F6B" />
          <Stop offset={0.494792} stopColor="#4D5266" />
          <Stop offset={0.791667} stopColor="#3E4559" />
          <Stop offset={1} stopColor="#1B2126" />
          <Stop offset={1} stopColor="#343340" />
        </RadialGradient>
      </Defs>
    </Svg>
  )
}

export default TerribleBefore
