import React from "react";

const SvgIconChatPhotoMWhite = props => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <rect width={18} height={13} x={4.5} y={7.5} stroke="#FFF" rx={2} />
      <circle
        cx={8}
        cy={11}
        r={1}
        fill="#FFF"
        fillRule="nonzero"
        opacity={0.3}
      />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M10.655 18H7.487a.5.5 0 01-.367-.84l2.537-2.739a1 1 0 011.467 0l1.226 1.324 2.434-3.238a1 1 0 011.598 0L19.91 17.2a.5.5 0 01-.4.8h-8.855z"
        opacity={0.3}
      />
      <path
        stroke="#FFF"
        d="M4.13 16.5L19.5 6.725V4.91c0-.775-.653-1.409-1.466-1.409H2.966c-.813 0-1.466.634-1.466 1.41v10.18c0 .776.653 1.41 1.466 1.41H4.13z"
      />
    </g>
  </svg>
);

export default SvgIconChatPhotoMWhite;
