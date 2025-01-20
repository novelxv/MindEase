import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  RadialGradient,
  Stop
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function GoodBefore(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_i_20_494)">
        <Circle cx={24} cy={24} r={24} fill="url(#paint0_radial_20_494)" />
      </G>
      <Path
        d="M18 30.5l.261.422c2.756 4.452 9.31 4.217 11.739-.422v0M14 23v0c.734-2.494 4.266-2.494 5 0v0M29 23v0c.8-2.402 4.2-2.402 5 0v0"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_20_494"
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

export default GoodBefore
