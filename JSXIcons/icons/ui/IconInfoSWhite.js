import React from "react";

const SvgIconInfoSWhite = props => (
  <svg width={18} height={18} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h18v18H0z" />
      <circle stroke="#FFF" opacity={0.9} cx={9} cy={9} r={7.5} />
      <path
        d="M9 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zm-.75 1.502a.75.75 0 111.5 0v3.746a.75.75 0 11-1.5 0V8.252z"
        fill="#FFF"
        opacity={0.3}
      />
    </g>
  </svg>
);

export default SvgIconInfoSWhite;
