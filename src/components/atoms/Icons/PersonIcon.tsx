import React from 'react';

interface PersonIconProps {
  viewBox: string;
}

export const PersonIcon: React.FC<PersonIconProps> = ({viewBox}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={viewBox}
      height={viewBox}
      viewBox="0 0 20 20"
    >
      <path
        id="person"
        d="M12,12A5,5,0,1,0,7,7,5,5,0,0,0,12,12Zm3.333-5A3.333,3.333,0,1,1,12,3.667,3.333,3.333,0,0,1,15.333,7ZM22,20.333A1.632,1.632,0,0,1,20.333,22H3.667A1.632,1.632,0,0,1,2,20.333c0-1.667,1.667-6.667,10-6.667S22,18.667,22,20.333Zm-1.667-.007a4.453,4.453,0,0,0-1.387-2.773c-1.087-1.087-3.132-2.22-6.947-2.22s-5.86,1.133-6.947,2.22a4.463,4.463,0,0,0-1.387,2.773Z"
        transform="translate(-2 -2)"
      />
    </svg>
  );
};
