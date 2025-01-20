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

function OkayBefore(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_i_20_492)">
        <Circle cx={24} cy={24} r={24} fill="url(#paint0_radial_20_492)" />
      </G>
      <Path
        d="M19 33.5h11"
        stroke="#fff"
        strokeWidth={1.625}
        strokeLinecap="round"
      />
      <Circle cx={32} cy={24} r={2} fill="#fff" />
      <Circle cx={32} cy={24} r={2} fill="#fff" />
      <Circle cx={32} cy={24} r={2} fill="#fff" />
      <Circle cx={17} cy={24} r={2} fill="#fff" />
      <Circle cx={17} cy={24} r={2} fill="#fff" />
      <Circle cx={17} cy={24} r={2} fill="#fff" />
      <Defs>
        <RadialGradient
          id="paint0_radial_20_492"
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

export default OkayBefore