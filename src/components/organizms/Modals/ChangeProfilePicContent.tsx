import {
  Box,
  Center,
  DrawerCloseButton,
  HStack,
  VStack
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { ArrowPrevIcon } from 'src/components/atoms/Icons/Arrows/ArrowPrevIcon';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import FileUpload from 'src/components/molecules/Inputs/FIleUpload';
import { SliderWithConstrols } from 'src/components/molecules/Sliders/SliderWithConstrols';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch } from 'src/redux/app/hook';
import { toggleProfilePictureChangeModal } from 'src/redux/features/global/gloabalSlice';
import getCroppedImg from 'src/utils/functions/createImage';

interface ChangeProfilePicContentProps {}

export const ChangeProfilePicContent: React.FC<ChangeProfilePicContentProps> =
  ({}) => {
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [file, setFile] = useState<File | null>(null);
    const [filePath, setFilePath] = useState('');
    const [isEditing, setIsEditing] = useState(false)

    const dispatch = useAppDispatch();
    const onClose = () => dispatch(toggleProfilePictureChangeModal());

    const onZoomChange = (zoom) => {
      setZoom(zoom);
    };

    const onCropComplete = useCallback((_croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const onCrop = async () => {
      const croppedImageUrl = await getCroppedImg(filePath, croppedAreaPixels);
      console.log('url: ', croppedImageUrl)
      setFilePath(croppedImageUrl)
      setZoom(1)
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
          <Center p="8" position="relative">
            <Box
              h="180px"
              w="180px"
              borderRadius="1000px"
              bg="autoBlue.400"
              overflow="hidden"
            >
              <FileUpload
                filePath={filePath}
                setFilePath={setFilePath}
                file={file}
                setFile={setFile}
                onCropComplete={onCropComplete}
                onZoomChange={onZoomChange}
                zoom={zoom}
                name="file Upload"
                placeholder="upload"
                acceptedFileTypes="image/*"
              />
            </Box>
          </Center>
          <TextRegular fontSize="16px">Scale and Crop</TextRegular>
         <SliderWithConstrols 
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={setZoom}
         />
          <HStack w="full" pt="24px">
            <ButtonRegular
              bg="autoGrey.400"
              color="black"
              _active={{ bg: 'autoGrey.600' }}
              onClick={onClose}
            >
              Cancel
            </ButtonRegular>
            <ButtonRegular onClick={onCrop}>Save</ButtonRegular>
          </HStack>
        </VStack>{' '}
      </>
    );
  };
