import {
  Box,
  Center,
  DrawerCloseButton,
  HStack,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { ArrowPrevIcon } from 'src/components/atoms/Icons/Arrows/ArrowPrevIcon';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { ProfilePictureCrop } from 'src/components/molecules/Croppers/ProfilePictureCrop';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import FileUpload from 'src/components/molecules/Inputs/FIleUpload';
import { SliderWithConstrols } from 'src/components/molecules/Sliders/SliderWithConstrols';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch } from 'src/redux/app/hook';
import { setUserAvatarThunk } from 'src/redux/features/auth/userSlice';
import { toggleProfilePictureChangeModal } from 'src/redux/features/global/gloabalSlice';
import getCroppedImg from 'src/utils/functions/getCroppedImg';
import { showErrorNotification } from 'src/utils/functions/showNotification';

interface ChangeProfilePicContentProps {}

export const ChangeProfilePicContent: React.FC<ChangeProfilePicContentProps> =
  ({}) => {
    const [zoom, setZoom] = useState(1.3);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [_file, setFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
    const [buttonIsLoading, setButtonIsLoading] = useState(false);

    const toast = useToast();

    const dispatch = useAppDispatch();

    const onClose = () => {
      if (isEditing) {
        setIsEditing(false);
        setImageUrl('');
      } else {
        dispatch(toggleProfilePictureChangeModal());
      }
    };

    const onZoomChange = (zoom) => {
      setZoom(zoom);
    };

    const onCropComplete = useCallback((_croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const onCrop = async () => {
      const croppedImageBlob = await getCroppedImg(imageUrl, croppedAreaPixels);
      setZoom(1);
      setImageUrl(URL.createObjectURL(croppedImageBlob!));
      setIsEditing(false);
      setCroppedImage(croppedImageBlob);
    };

    const onSubmit = async () => {
      const formdata = new FormData();
      if (croppedImage) {
        formdata.append('profile-avatar', croppedImage, 'coppedImage.jpg');
        setButtonIsLoading(true);
        dispatch(setUserAvatarThunk(formdata))
          .unwrap()
          .then(() => {
            setButtonIsLoading(false);
            onClose();
          })
          .catch((error) => {
            console.log('error: ', error)
            setButtonIsLoading(false);
            showErrorNotification({
              toast,
              message: 'Unable to save photo. Please, try later',
            });
          });
      } else {
        // if not file to crop show toast message
        showErrorNotification({
          toast,
          message: 'Please Choose the picture.',
        });
      }
    };

    return (
      <>
        <HStack position="absolute" left="10px" top="20px" spacing="2">
          <DrawerCloseButton
            position="relative"
            top="0"
            left="0"
            as={ArrowPrevIcon}
            boxSize={6}
          />
          <HeadingSecondary fontSize="20px">Profile Picture</HeadingSecondary>
        </HStack>
        <VStack w="full" pt="32px" spacing="2">
          <Center p="8">
            <Box
              h="180px"
              w="180px"
              borderRadius="1000px"
              bg="autoBlue.400"
              position="relative"
              overflow="hidden"
            >
              <ProfilePictureCrop
                imageUrl={imageUrl}
                zoom={zoom}
                onZoomChange={onZoomChange}
                onCropComplete={onCropComplete}
              />
            </Box>
          </Center>
          {!isEditing ? (
            <FileUpload
              setFilePath={setImageUrl}
              setFile={setFile}
              acceptedFileTypes="image/*"
              setIsEditing={setIsEditing}
            />
          ) : (
            <>
              <TextRegular fontSize="16px">Scale and Crop</TextRegular>
              <SliderWithConstrols
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={setZoom}
              />
            </>
          )}

          <HStack w="full" pt="24px">
            <ButtonRegular
              bg="autoGrey.400"
              color="black"
              _active={{ bg: 'autoGrey.600' }}
              onClick={onClose}
            >
              Cancel
            </ButtonRegular>
            <ButtonRegular
              isLoading={buttonIsLoading}
              onClick={() => {
                isEditing ? onCrop() : onSubmit();
              }}
            >
              {isEditing ? 'Crop' : 'Save'}
            </ButtonRegular>
          </HStack>
        </VStack>
      </>
    );
  };
