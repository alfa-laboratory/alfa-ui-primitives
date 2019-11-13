import React from "react";

const SvgIconInfoMWhite = props => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <circle stroke="#FFF" opacity={0.9} cx={12} cy={12} r={10.5} />
      <path
        d="M12 9a1 1 0 110-2 1 1 0 010 2zm-1 2.003A.999.999 0 0112 10c.552 0 1 .438 1 1.003v4.994A.999.999 0 0112 17c-.552 0-1-.438-1-1.003v-4.994z"
        fill="#FFF"
        opacity={0.3}
      />
    </g>
  </svg>
);

export default SvgIconInfoMWhite;
