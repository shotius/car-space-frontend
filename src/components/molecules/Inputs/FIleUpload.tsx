import { Box, Icon, IconButton } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import { PersonIcon } from 'src/components/atoms/Icons/PersonIcon';

interface Props {
  name: string;
  placeholder: string;
  acceptedFileTypes: string;
  onZoomChange: (zoom: number) => void;
  zoom: number;
  onCropComplete: (croppedArea: any, croppedAreaPixels: any) => void;
  file: File | null, 
  setFile: (file: File) => void;
  filePath: string;
  setFilePath: (a: any) => void
}

export const FileUpload: React.FC<Props> = ({
  name,
  acceptedFileTypes,
  onZoomChange,
  zoom,
  onCropComplete,
  file, 
  setFile, 
  filePath, 
  setFilePath
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });

  const onClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setFilePath(URL.createObjectURL(e.currentTarget.files[0]));
      setFile(e.currentTarget.files[0]);
    }
    console.log('file', file);
  };

  const choosePicture = () => {
    inputRef.current?.click();
  };

  return (
    <Box onClick={choosePicture} h="120%">
      {filePath ? (
        <Cropper
          image={filePath}
          crop={crop}
          zoom={zoom}
          cropShape="round"
          aspect={1 / 1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={onZoomChange}
        />
      ) : (
        <IconButton
          pointerEvents="none"
          aria-label="upload file"
          icon={<Icon as={PersonIcon} boxSize={10} fill="white" />}
          bg="tranparent"
          h="full"
          w="full"
        />
      )}
      <input
        type="file"
        accept={acceptedFileTypes}
        name={name}
        ref={inputRef}
        onChange={(e) => onClickHandler(e)}
        style={{ display: 'none' }}
      />
    </Box>
  );
};

export default FileUpload;
