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

function SvgComponent(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_i_20_496)">
        <Circle cx={24} cy={24} r={24} fill="url(#paint0_radial_20_496)" />
      </G>
      <Path
        d="M18.298 30.725L16.5 30.5A7.5 7.5 0 0024 38h1a7.5 7.5 0 007.5-7.5l-1.798.225a50 50 0 01-12.404 0z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M12 23v0c1.287-3.125 5.713-3.125 7 0v0M29 23v0c1.387-2.972 5.613-2.972 7 0v0"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_20_496"
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

export default SvgComponent
