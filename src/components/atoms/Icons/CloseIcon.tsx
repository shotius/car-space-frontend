import React from 'react';

interface CloseIconProps {}

export const CloseIcon: React.FC<CloseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g
        id="close_icon"
        data-name="close icon"
        transform="translate(-1168 -274)"
      >
        <rect
          id="Rectangle_339"
          data-name="Rectangle 339"
          width="24"
          height="24"
          transform="translate(1168 274)"
          fill="#fff"
        />
        <path
          id="Icon_ionic-md-close"
          data-name="Icon ionic-md-close"
          d="M22.523,9.023l-1.5-1.5-6,6-6-6-1.5,1.5,6,6-6,6,1.5,1.5,6-6,6,6,1.5-1.5-6-6Z"
          transform="translate(1165.477 271.477)"
        />
      </g>
    </svg>
  );
};