import React from "react";

const SvgIconClockMBlack = props => (
  <svg width={20} height={20} {...props}>
    <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <circle stroke="#0B1F35" cx={12} cy={12} r={9.5} />
      <path
        d="M13 11.315V7.99A1 1 0 0012 7c-.556 0-1 .444-1 .99v3.63a.995.995 0 00.014.556c.077.435.444.78.899.82l3.79 2.189a1.003 1.003 0 001.368-.365.999.999 0 00-.368-1.367L13 11.315z"
        fill="#0B1F35"
        opacity={0.3}
      />
    </g>
  </svg>
);

export default SvgIconClockMBlack;
