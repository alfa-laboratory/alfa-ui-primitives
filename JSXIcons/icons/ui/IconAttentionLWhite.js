import React from "react";

const SvgIconAttentionLWhite = props => (
  <svg width={30} height={30} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h30v30H0z" />
      <g transform="translate(1 2)" fill="#FFF">
        <path
          d="M14.436 1.302a.5.5 0 00-.872 0L1.27 23.256a.5.5 0 00.436.744h24.588a.5.5 0 00.436-.744L14.436 1.302zm.873-.488l12.294 21.953A1.5 1.5 0 0126.293 25H1.707a1.5 1.5 0 01-1.309-2.233L12.691.814a1.5 1.5 0 012.618 0z"
          fillRule="nonzero"
          opacity={0.9}
        />
        <path
          d="M14 8.5a1.011 1.011 0 011.009 1.08l-.432 6.38a.579.579 0 01-1.155 0l-.43-6.38A1.011 1.011 0 0114 8.5z"
          opacity={0.3}
        />
        <rect
          opacity={0.3}
          x={12.75}
          y={18}
          width={2.5}
          height={2.5}
          rx={1.25}
        />
      </g>
    </g>
  </svg>
);

export default SvgIconAttentionLWhite;
