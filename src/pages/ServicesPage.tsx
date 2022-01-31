import { Box, Flex, SimpleGrid, VStack } from '@chakra-ui/react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CarLeftSideIcon } from 'src/components/atoms/Icons/CarLeftSideIcon';
import { FilesStackIcon } from 'src/components/atoms/Icons/FilesStackIcon';
import { FolersQueueIcon } from 'src/components/atoms/Icons/FoldersQueueIcon';
import { ShipIcon } from 'src/components/atoms/Icons/ShipIcon';
import { ServiceCard } from 'src/components/molecules/Cards/ServiceCard';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <>
      <Box
        w="full"
        h={['164px', '200px', '300px']}
        backgroundRepeat={'no-repeat'}
        objectFit={'cover'}
        bgPos={'center'}
        position="relative"
        backgroundImage={[
          'https://res.cloudinary.com/car-space-v1/image/upload/v1643566591/car-space/services/photo-1554415707-6e8cfc93fe23-min_xdd4vs.png',
          'https://res.cloudinary.com/car-space-v1/image/upload/v1643566592/car-space/services/photo-1554415707-6e8cfc93fe23_2x-min_hlwoyy.png',
          'https://res.cloudinary.com/car-space-v1/image/upload/v1643566592/car-space/services/photo-1554415707-6e8cfc93fe23_3x-min_sit0rx.png',
        ]}
      >
        {/* Overlay  */}
        <Box
          bg="rgba(0, 0, 0, 0.25)"
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
        />
        {/* Text  */}
        <TextRegular
          position="absolute"
          top="50%"
          left="50%"
          fontSize={['36px', null, '40px', '50px']}
          color="white"
          fontWeight={'bold'}
          wordBreak={'unset'}
          transform="translateX(-50%) translateY(-50%)"
          w="full"
          textAlign={'center'}
        >
          ჩვენი სერვისები
        </TextRegular>
      </Box>
      <ContainerOuter>
        <SimpleGrid columns={[1, null, 2]} spacing="4" mt="32px">
          {/* Installment  */}
          <ServiceCard
            Icon={FilesStackIcon}
            heading="შიდა განვადება"
            content="მომხმარებლებს ვთავაზობთ მანქანის დაფინანსებას, მის საქართველოში
            ჩამოსვლამდე. თუკი გსურთ ავტმობილის ჩამოყვანა და გჭირდებათ თანხა, რომ
            დაფაროთ ავტომობილის ღირებულება, ჩვენ გაძლევთ შესაძლებლობას მარტივად
            მოაგვაროთ ეს პრობლემა და დაიფინანსოთ მანქანის ღირებულების 80%-მდე
            თანხა."
          />

          {/* Leasing  */}
          <ServiceCard
            Icon={FolersQueueIcon}
            heading="ლიზინგი"
            content="მანქანის ჩამოყვანა რამდენიმი ტიპის კალკულაციასთანაა დაკავშირებული. გთავაზობთ ამერიკიდან ტრანსპორტირების, განბაჟების, შიდა დაფინანსებისა და ლიზინგის კალკულატორებს, რომელიც დაგეხმარებათ დეტალურად დაიანგარიშოთ ყველა შესაძლო ხარჯი, რაც მანქანის ჩამოყვანასთანაა დაკავშირებული."
          />

          {/* Car import  */}
          <ServiceCard
            Icon={ShipIcon}
            heading="მანქანის ჩამოყვანა"
            content="ბაზარზე არსებული მრავალწლოვანი გამოცდილებიდან გამომდინარე, გვყავს საერთაშორისო პარტნიორები, რომელთა დახმარებითაც მანქანის ჩამოყვანის სერვისი ხდება საერთაშორისო ხარისხით. ავტომობილები ჩამოგვყავს უმოკლეს დროში და შესაძლო მინიმალურ ფასად."
          />
          {/* Choose a car  */}

          <ServiceCard
            Icon={CarLeftSideIcon}
            heading="მანქანის შერჩევა"
            content="ჩვენი პროფესიონალი ავტო ასისტენტი დაგეხმარებათ თქვენთვის სასურველი ავტომობილის შერჩევაში. შეისწავლის ამ არჩეული ავტომობილის ისტორიას, დაზიანებებს და ზოგად მდგომარეობას. ამ ინფორმაციაზე დაყრდნობით დაგეხმარებათ კონკრეტული გადაწყვეტილების მიღებაში, რაზეც აიღებს შესაბამის პასუხისმგებლობას."
          />
        </SimpleGrid>
      </ContainerOuter>
    </>
  );
};

export default ServicesPage;
