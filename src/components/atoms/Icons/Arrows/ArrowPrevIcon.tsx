import React from 'react';

interface ArrowPrevIconProps {}

export const ArrowPrevIcon: React.FC<ArrowPrevIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g id="prev" transform="translate(24 24) rotate(180)">
        <path
          id="Path_457"
          data-name="Path 457"
          d="M0,0H24V24H0Z"
          fill="none"
        />
        <path
          id="Path_458"
          data-name="Path 458"
          d="M12.172,6.536,6.808,1.363,8.222,0,16,7.5,8.222,15,6.808,13.637l5.364-5.172H0V6.536Z"
          transform="translate(4 4.999)"
          fill="#dedee7"
        />
      </g>
    </svg>
  );
};
