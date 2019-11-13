import React from "react";

const SvgArtAtmPaymentCardXsColor = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <circle
        id="art_atm-payment-card_xs_color_svg__a"
        cx={32}
        cy={32}
        r={32}
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={32} cy={32} r={32} fillRule="nonzero" fill="#8888AD" />
      <mask id="art_atm-payment-card_xs_color_svg__b" fill="#fff">
        <use xlinkHref="#art_atm-payment-card_xs_color_svg__a" />
      </mask>
      <g mask="url(#art_atm-payment-card_xs_color_svg__b)">
        <path d="M14 14h36v36H14z" />
        <path
          d="M46 48H18V22.331C18 18.841 20.74 16 24.108 16h15.784C43.26 16 46 18.84 46 22.331V48zm-27.263-.762h26.526V22.331c0-3.07-2.41-5.57-5.37-5.57H24.107c-2.962 0-5.371 2.5-5.371 5.57v24.907z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <path
          fill="#FFF"
          fillRule="nonzero"
          opacity={0.3}
          d="M23 22h18v10H23zm10 13h8v1h-8zm-10 0h3v3h-3zm4 0h3v3h-3zm-4 4h3v3h-3zm4 0h3v3h-3z"
        />
      </g>
    </g>
  </svg>
);

export default SvgArtAtmPaymentCardXsColor;
