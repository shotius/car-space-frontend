 ;

interface GTArrowProps {}

export const GTArrow: React.FC<GTArrowProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      viewBox="0 0 8 12"
    >
      <path
        id="arrow"
        d="M12.19,16.835l4.537-5.295a.771.771,0,0,1,1.211,0,1.131,1.131,0,0,1,0,1.416l-5.141,6a.771.771,0,0,1-1.183.029L6.438,12.961a1.128,1.128,0,0,1,0-1.416.771.771,0,0,1,1.211,0Z"
        transform="translate(-11.246 18.188) rotate(-90)"
      />
    </svg>
  );
};
