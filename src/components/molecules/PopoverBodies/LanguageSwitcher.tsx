import { Icon, StackProps, VStack } from '@chakra-ui/react';
import { UKIcon } from 'src/components/atoms/Icons/UKIcon';
import { useAppDispatch } from 'src/redux/app/hook';
import { setAppLanguage } from 'src/redux/features/global/gloabalSlice';
import { ButtonRect } from '../Buttons/ButtonRect';
import { TextRegular } from '../Texts/TextRegular';

interface LanguageSwitcherProps {}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps & StackProps> = ({
  p = '0',
  spacing = 1,
  ...rest
}) => {
  const dispatch = useAppDispatch();

  return (
    <VStack spacing={spacing} p={p} {...rest}>
      <ButtonRect onClick={() => dispatch(setAppLanguage('Eng'))}>
        <Icon as={UKIcon} mr="2" />
        <TextRegular fontWeight="light">Eng</TextRegular>
      </ButtonRect>
      {/* <ButtonRect onClick={() => dispatch(setAppLanguage('Geo'))}> */}
        {/* <Icon as={GeoIcon} mr="2" /> */}
        {/* <TextRegular fontWeight="light">Geo</TextRegular> */}
      {/* </ButtonRect> */}
      {/* <ButtonRect onClick={() => dispatch(setAppLanguage('Rus'))}> */}
        {/* <Icon as={RusIcon} mr="2" /> */}
        {/* <TextRegular fontWeight="light">Rus</TextRegular> */}
      {/* </ButtonRect> */}
    </VStack>
  );
};
