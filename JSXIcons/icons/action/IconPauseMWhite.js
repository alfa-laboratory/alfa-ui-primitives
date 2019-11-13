import React from "react";

const SvgIconPauseMWhite = props => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
      />
      <path fill="#FFF" d="M8 7h2v10H8V7zm6 0h2v10h-2V7z" opacity={0.3} />
    </g>
  </svg>
);

export default SvgIconPauseMWhite;
