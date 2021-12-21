import {
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
} from '@chakra-ui/react';
import { CustomOverlay } from 'src/components/molecules/overlays/CustomOverlay';
import { SliderWIthThumbs } from 'src/components/molecules/Sliders/SliderWithThumbs/SliderWIthThumbs';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { closeCarDetailModal } from 'src/redux/features/global/gloabalSlice';
import { useCarContext } from 'src/utils/contexts/CarContext';

interface CarImageSliderModalProps {}

export const CarImageSliderModal: React.FC<CarImageSliderModalProps> = ({}) => {
  const { car } = useCarContext();
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(
    (state) => state.globalAppState.carDetailModalShown
  );

  const onClose = () => dispatch(closeCarDetailModal());

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <CustomOverlay
        isActive={isOpen}
        onClick={() => {}}
        bg="black"
        zIndex="modal"
        opacity=".8"
      />
      <ModalContent
        borderRadius="none"
        opacity="1"
        bg="transparent"
      >
        <ModalCloseButton
          color="white"
          onClick={() => {
            console.log('pressed');
            onClose();
          }}
        />
        <ModalBody p="0">
          <SliderWIthThumbs images={car.imgUrls} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
