import React from "react";

const SvgIconCrownSColor = props => (
  <svg width={18} height={18} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="none" d="M0 0h18v18H0z" />
      <path
        d="M9 17A8 8 0 109 1a8 8 0 000 16zm0 1A9 9 0 119 0a9 9 0 010 18z"
        fill="#FFF"
        fillRule="nonzero"
      />
      <circle fill="#FFEBB6" cx={9} cy={9} r={8} />
      <path
        d="M13 11H5L4 5.997l2.74 1.958L9 4l2.26 3.955L14 5.997 13 11z"
        fill="#FFB800"
      />
      <path fill="#FFB800" fillRule="nonzero" d="M5 13v-1h8.003v1z" />
    </g>
  </svg>
);

export default SvgIconCrownSColor;
