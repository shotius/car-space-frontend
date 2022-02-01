import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CarLeftSideIcon } from 'src/components/atoms/Icons/CarLeftSideIcon';
import { FilesStackIcon } from 'src/components/atoms/Icons/FilesStackIcon';
import { FolersQueueIcon } from 'src/components/atoms/Icons/FoldersQueueIcon';
import { ShipIcon } from 'src/components/atoms/Icons/ShipIcon';
import { Card } from 'src/components/molecules/Cards/Card';
import { ServiceCard } from 'src/components/molecules/Cards/ServiceCard';
import { ScrollToTop } from 'src/components/molecules/ScrollToTop';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <>
      <ScrollToTop />
      <ContainerOuter p={["0",null, null, "4"]} pt={[null, null, null, '42px']}>
        <Box
          p="0"
          position={'relative'}
          w="full"
          h={['300px', null, null, '289px']}
          bgPos="center"
          objectFit="cover"
          borderRadius={{ lg: '8' }}
          backgroundRepeat={'no-repeat'}
          zIndex={0}
          backgroundImage={[
            'https://res.cloudinary.com/car-space-v1/image/upload/v1643566592/car-space/services/photo-1554415707-6e8cfc93fe23_2x-min_hlwoyy.png',
            'https://res.cloudinary.com/car-space-v1/image/upload/v1643566592/car-space/services/photo-1554415707-6e8cfc93fe23_3x-min_sit0rx.png',
          ]}
        >
          <Box
            position="absolute"
            background="rgba(0, 0, 0, 0.3)"
            top="0"
            right={0}
            zIndex={-1}
            bottom="0"
            left="0"
            borderRadius={{ lg: '8' }}
          />
          <Center h="full" zIndex={100}>
            <Heading
              color="white"
              fontSize={['36px', null, '40px', '50px']}
              isTruncated
            >
              ჩვენი სერვისები
            </Heading>
          </Center>
        </Box>
      </ContainerOuter>
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

      {/* banner divider */}
      <Box
        position="relative"
        bg="autoBlue.400"
        mt={['80px', '100px', '120', '160px']}
        px={['4']}
        py={['32px', null, '48px']}
      >
        <ContainerOuter>
          <Box maxW={['full', null, '40%']} pl={['0', '4', '8']}>
            <TextRegular
              fontSize={'22px'}
              color="white"
              pb="32px"
              fontWeight={'bold'}
              lineHeight={'29px'}
            >
              ადგილობრივი მიწოდება
            </TextRegular>
            <TextRegular color="white" lineHeight={'24px'} fontSize={'14px'}>
              ჩვენ გთავაზობთ შიდა ტრანსპორტირების (საქართველოში) სერვისს, რაც
              გულისხმობს იმპორტირებული ავტომობილის ტრანსპორტირებას საქართველოს
              მასშტაბით ნებისმიერ ადგილას.
            </TextRegular>
          </Box>
          <Image
            position={'absolute'}
            display={['none', null, 'block']}
            w="55%"
            h="100%"
            right={0}
            top={0}
            clipPath={'polygon(20% 0, 100% 0%, 100% 100%, 0% 100%)'}
            src="https://res.cloudinary.com/car-space-v1/image/upload/v1643631477/car-space/services/pexels-photo-97079_2x-min_yotvt0.png"
          />
        </ContainerOuter>
      </Box>

      {/* Services  */}
      <ContainerOuter p={['0', null, '4']}>
        <VStack
          mt={['80px', null, '120px', '160px']}
          w="full"
          bg={['transparent', null, null, 'white']}
          borderRadius={'8'}
          px={[null, null, '48px', '90px']}
          py={[null, null, '63px']}
        >
          <Card w="full" bg="transparent" p="4">
            <Stack
              w="full"
              align="flex-start"
              spacing={['24px', null, '63px', '120px']}
              direction={['column', null, 'row']}
            >
              <AspectRatio
                ratio={[7 / 3, null, 448 / 314]}
                minW={['full', null, '328px', '418px']}
              >
                <Image
                  borderRadius={'8px'}
                  src="https://res.cloudinary.com/car-space-v1/image/upload/v1643566568/car-space/services/photo-1518306727298-4c17e1bf6942_3x-min_gpqdb0.png"
                  // src="https://res.cloudinary.com/car-space-v1/image/upload/v1643566568/car-space/services/photo-1518306727298-4c17e1bf6942_2x-min_oblo5g.png"
                  // src={
                  //   'https://res.cloudinary.com/car-space-v1/image/upload/v1643566567/car-space/services/photo-1518306727298-4c17e1bf6942-min_kz67bp.png'
                  // }
                />
              </AspectRatio>
              <VStack
                alignSelf="stretch"
                justify="center"
                align="flex-start"
                spacing={'28px'}
              >
                <TextRegular
                  fontSize={'18px'}
                  color="#3D405B"
                  lineHeight={'24px'}
                  fontWeight={'bold'}
                >
                  ვიზუალური დაზღვევა
                </TextRegular>
                <TextRegular fontSize={'14px'}>
                  ჩვენ ვაზღვევთ ყველა ისეთ ვიზუალურ დეფექტს, რომელიც ავტომობილის
                  შეძენისას ჩანდა, რომ არ არსებობდა და ტრანსპორტირებისას
                  დაემატა. ანაზღაურება ხდება ნებისმიერი მოცულობს თანხაზე
                  $100-დან.
                </TextRegular>
              </VStack>
            </Stack>
          </Card>

          <Card w="full" bg="transparent" p="4">
            <Stack
              w="full"
              align="flex-start"
              spacing={['24px', null, '63px', '120px']}
              direction={['column', null, 'row-reverse']}
              pt={['32px', null, '48px']}
            >
              <AspectRatio
                ratio={[7 / 3, null, 448 / 314]}
                minW={['full', null, '328px', '418px']}
              >
                <Image
                  borderRadius={'8px'}
                  src="https://res.cloudinary.com/car-space-v1/image/upload/v1643566607/car-space/services/photo-1606750957664-896c163bed2d_3x-min_gzyqos.png"
                />
              </AspectRatio>
              <VStack
                alignSelf="stretch"
                justify="center"
                align="flex-start"
                spacing={'28px'}
              >
                <TextRegular
                  fontSize={'18px'}
                  color="#3D405B"
                  lineHeight={'24px'}
                  fontWeight={'bold'}
                >
                  შიდა ნაწილების დაზღვევა
                </TextRegular>
                <TextRegular fontSize={'14px'}>
                  ჩვენ ვაზღვევთ ნებისმიერ დეფექტს ძრავზე, კატალიზატორზე,
                  გადაცრემათა კოლოფსა და ხიდზე, რაც არ იყო ცნობილი მანქანის
                  შეძენისას. ანაზღაურება ხდება ნებისმიერი მოცულობს თანხაზე
                  $100-დან.
                </TextRegular>
              </VStack>
            </Stack>
          </Card>
        </VStack>
      </ContainerOuter>
    </>
  );
};

export default ServicesPage;
