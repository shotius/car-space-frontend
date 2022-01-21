import {
  AspectRatio,
  Container,
  IconButton,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { Card } from 'src/components/molecules/Cards/Card';
import { FormikFileInput } from 'src/components/molecules/FormikInput/FormikFileInput';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  addBannerThunk,
  deleteBanner,
  getBanners,
} from 'src/redux/features/banners/bannerSlice';

interface AddBannersProps {}

interface IInitState {
  place: number;
  banner: FileList | null;
}

const AddBanners: React.FC<AddBannersProps> = ({}) => {
  const [isDeleting, setDeleting] = useState(false);

  const dispatch = useAppDispatch();
  const toast = useToast();
  const banners = useAppSelector((state) => state.banners.banners);

  const initState: IInitState = {
    place: 1,
    banner: null,
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  function fetchBanners() {
    dispatch(getBanners());
  }

  function handleDelete(id: string) {
    setDeleting(true);
    dispatch(deleteBanner(id))
      .then(() => {
        fetchBanners();
        setDeleting(false);
        toast({ title: 'banner deleted', position: 'top' });
      })
      .catch(() => {
        setDeleting(false);
        toast({
          title: 'could not delelte the banner',
          position: 'top',
          status: 'error',
        });
      });
  }

  return (
    <ContainerOuter pt={['32px', null, null, '40px']}>
      <Container>
        <Card w="full">
          <Formik
            initialValues={initState}
            onSubmit={(values, { setSubmitting }) => {
              const { banner } = values;
              const formdata = new FormData();

              // append values to the formdata
              if (banner) {
                formdata.append('banner', banner[0]);
              }

              formdata.append('place', values.place.toString());

              // submit
              dispatch(addBannerThunk(formdata))
                .unwrap()
                .then(() => {
                  toast({
                    title: 'banner added',
                    position: 'top',
                    status: 'success',
                  });
                  setSubmitting(false);
                })
                .catch((error) => {
                  toast({ title: error, position: 'top', status: 'error' });
                  setSubmitting(false);
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <VStack align="flex-start">
                  <HeadingSecondary textAlign={'center'} w="full">
                    Add remove Banners
                  </HeadingSecondary>

                  {/* Inputs  */}
                  <FormikInput
                    name="place"
                    type="number"
                    label="banner index"
                  />
                  <FormikFileInput name="banner" />

                  {/* Submit button  */}
                  <ButtonRegular
                    w="200px"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    add banner
                  </ButtonRegular>
                </VStack>
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
      <Card mt="4" p="0">
        <HeadingSecondary w="full" textAlign={'center'} pt="4">
          Banners
        </HeadingSecondary>
        <VStack align="flex-start">
          {banners.map((banner) => (
            <VStack
              w="full"
              align="flex-start"
              key={banner.img}
              position="relative"
            >
              <TextRegular
                position="absolute"
                top="20px"
                left="10px"
                bg="white"
                zIndex="1"
                padding="4"
              >
                index: {banner.place}.
              </TextRegular>
              <AspectRatio w="full">
                <img src={banner.img} />
              </AspectRatio>
              <IconButton
                icon={<CloseIcon />}
                aria-label="delete banner"
                position={'absolute'}
                right="10px"
                top="20px"
                onClick={() => handleDelete(banner.id)}
                isLoading={isDeleting}
              />
            </VStack>
          ))}
        </VStack>
      </Card>
    </ContainerOuter>
  );
};

export default AddBanners;
