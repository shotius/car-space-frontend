import React from 'react';

interface BurgerIconProps {}

export const BurgerIcon: React.FC<BurgerIconProps> = () => {
  return (
    <svg
      id="burger"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect
        id="Rectangle_244"
        data-name="Rectangle 244"
        width="24"
        height="24"
        fill="#fff"
      />
      <path
        id="list"
        d="M2.5,17.667a.874.874,0,0,1,.909-.833H21.591a.836.836,0,1,1,0,1.667H3.409A.874.874,0,0,1,2.5,17.667ZM2.5,11a.874.874,0,0,1,.909-.833H21.591a.836.836,0,1,1,0,1.667H3.409A.874.874,0,0,1,2.5,11Zm0-6.667A.874.874,0,0,1,3.409,3.5H21.591a.874.874,0,0,1,.909.833.874.874,0,0,1-.909.833H3.409A.874.874,0,0,1,2.5,4.333Z"
        transform="translate(-0.5 1.5)"
      />
    </svg>
  );
};
