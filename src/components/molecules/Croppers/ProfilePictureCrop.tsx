import { useState } from 'react';
import Cropper, { CropperProps } from 'react-easy-crop';

interface Props {
  imageUrl: string;
  zoom: number;
  onZoomChange: CropperProps['onZoomChange'];
  onCropComplete: CropperProps['onCropComplete'];
}

export const ProfilePictureCrop: React.FC<Props> = ({
  zoom,
  imageUrl,
  onCropComplete,
  onZoomChange,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  return (
    <Cropper
      image={imageUrl}
      crop={crop}
      zoom={zoom}
      cropShape="round"
      aspect={1 / 1}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={onZoomChange}
    />
  );
};
