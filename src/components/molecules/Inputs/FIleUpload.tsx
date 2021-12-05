import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { TextButton } from '../Buttons/TextButton';

interface Props {
  acceptedFileTypes: string;
  setFile: (file: File) => void;
  setFilePath: (a: any) => void;
  setIsEditing: (b: boolean) => void;

}

export const FileUpload: React.FC<Props> = ({
  acceptedFileTypes,
  setFile,
  setFilePath,
  setIsEditing
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const uploaderClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setFilePath(URL.createObjectURL(e.currentTarget.files[0]));
      setFile(e.currentTarget.files[0]);
      setIsEditing(true)
    }
  };

  const refClick = () => {
    console.log('clicked');
    inputRef.current?.click();
  };

  return (
    <Box onClick={refClick} h="120%" cursor="pointer">
      <TextButton bg="tranparent" h="full" w="full">
        upload a file
      </TextButton>
      <input
        type="file"
        accept={acceptedFileTypes}
        ref={inputRef}
        onChange={(e) => uploaderClickHandler(e)}
        style={{ display: 'none' }}
      />
    </Box>
  );
};

export default FileUpload;
