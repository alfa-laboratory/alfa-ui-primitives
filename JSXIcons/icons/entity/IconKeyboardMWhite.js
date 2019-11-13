import React from "react";

const SvgIconKeyboardMWhite = props => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <g fill="#FFF">
        <path
          d="M3 4a1 1 0 00-1 1v15a1 1 0 001 1h19a1 1 0 001-1V5a1 1 0 00-1-1H3zm0-1h19a2 2 0 012 2v15a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z"
          fillRule="nonzero"
        />
        <g opacity={0.3}>
          <path d="M3 7h3v3H3zM7 7h3v3H7zM11 7h3v3h-3zM15 7h3v3h-3zM19 7h3v3h-3z" />
        </g>
        <path
          opacity={0.3}
          d="M3 11h3v3H3zM7 11h3v3H7zM11 11h3v3h-3zM7 15h11v3H7zM15 11h3v3h-3zM19 11h3v3h-3z"
        />
      </g>
    </g>
  </svg>
);

export default SvgIconKeyboardMWhite;
