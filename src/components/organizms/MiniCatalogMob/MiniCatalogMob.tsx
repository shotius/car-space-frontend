import { Box } from '@chakra-ui/react';
import { MiniCategoryCard } from 'components/molecules/MiniCategoryCard';
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader';
import React from 'react';
import Slider from 'react-slick';
import { breakpoint } from './breakpoints';
// import styles from './styles.module.css'
import './styles.css';

interface MiniCatalogMobProps {}

export const MiniCatalogMob: React.FC<MiniCatalogMobProps> = () => {
  // const [slidesToShow, setSlidesToShow] = useState<number>(0)

  // const screen = useDetectScreen()
  
  // useEffect(() => {
  //   if (screen.isMobile) {
  //     console.log("mobile")
  //     setSlidesToShow(2.1)
  //   } else if( screen.isTablet) {
  //     console.log('tablet')
  //     setSlidesToShow(3.1)
  //   } else if(screen.isDesktop) {
  //     console.log('desk')
  //     setSlidesToShow(6.1)
  //   }

  // }, [screen])


  const settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    responsive: breakpoint
  };
  
  return (
    <Box w="full">
      <SectionHeader mainText="Mini Category" secondaryText="See all" />
      <Box>
        <Slider {...settings}>
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          
        </Slider>
      </Box>
    </Box>
  );
};
