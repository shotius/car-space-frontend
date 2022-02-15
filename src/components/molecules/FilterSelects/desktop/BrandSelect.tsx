import {
  Box,
  BoxProps,
  Divider,
  Flex,
  StackProps,
  VStack,
} from '@chakra-ui/layout';
import { BmwIcon } from 'src/components/atoms/Icons/BmwIcon';
import { FordIcon } from 'src/components/atoms/Icons/FordIcon';
import { MercedesIcon } from 'src/components/atoms/Icons/MercedesIcon';
import { ShevroletIcon } from 'src/components/atoms/Icons/ShevroletIcon';
import { ToyotaIcon } from 'src/components/atoms/Icons/ToyotaIcon';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { TopBrandCard } from 'src/components/molecules/Cards/TopBrandCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { SelectSearch } from 'src/components/molecules/Inputs/SelectSearch';
import { CustomOverlay } from 'src/components/molecules/overlays/CustomOverlay';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { useBrandSelect } from 'src/utils/hooks/useBrandSelect';

interface BrandSelectProps {
  labelPadding?: BoxProps['p'];
  searchOnClear?: boolean;
}

export const BrandSelect: React.FC<BrandSelectProps & StackProps> = ({
  labelPadding,
  searchOnClear = true,
  ...rest
}) => {
  const {
    areOptionsOpen,
    setAreOptionsOpen,
    handleClose,
    selected,
    clearCb,
    placeholder,
    value,
    onFocus,
    searchWord,
    setSearchWord,
    handleSelect,
    optionsToShow,
  } = useBrandSelect({ searchOnClear });

  return (
    <SelectWrapper {...rest} areOptionsOpen={areOptionsOpen}>
      <CustomOverlay isActive={areOptionsOpen} onClick={handleClose} />
      {/* Content  */}
      <SelectContent>
        {/*  Input */}
        <SelectTrigger
          onClick={() => setAreOptionsOpen(true)}
          areOptionsOpen={areOptionsOpen}
          areOptionsSelected={!!selected.length}
          clearCb={clearCb}
        >
          <SelectSearch
            labelPadding={labelPadding}
            label="Brands"
            placeholder={placeholder}
            value={value ? capitalizeEach(value) : searchWord}
            onChange={(e) => setSearchWord(e.currentTarget.value)}
            onFocus={onFocus}
          />
        </SelectTrigger>

        {/* Options  */}
        <SelectOptions isOpen={areOptionsOpen} maxH="380px">
          <VStack
            h="full"
            w="full"
            overflowY={areOptionsOpen ? 'auto' : 'hidden'}
            align="flex-start"
            p="4"
            pt="2"
            spacing="2"
            css={{
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
                overflow: 'hidden',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#DEDEE0',
                borderRadius: '100px',
              },
              '::-webkit-scrollbar-button': {
                backgroundColor: 'white',
                display: 'block',
                visibility: 'hidden',
                borderStyle: 'solid',
                height: '3px',
                width: '6px',
              },
            }}
          >
            <Flex
              w="full"
              flexWrap="wrap"
              css={{
                gap: '8px',
              }}
            >
              <TopBrandCard
                icon={BmwIcon}
                maxW="37px"
                maxH="40px"
                bg={
                  selected.includes('BMW') ? 'autoOrange.100' : 'autoGrey.600'
                }
                boxSize={5}
                onClick={() => handleSelect('BMW')}
              />
              <TopBrandCard
                icon={MercedesIcon}
                maxW="37px"
                maxH="40px"
                bg={
                  selected.includes('Mercedes')
                    ? 'autoOrange.100'
                    : 'autoGrey.600'
                }
                boxSize={4}
                onClick={() => handleSelect('Mercedes')}
              />
              <TopBrandCard
                icon={ShevroletIcon}
                maxW="37px"
                maxH="40px"
                boxSize={20}
                bg={
                  selected.includes('SHEVROLET')
                    ? 'autoOrange.100'
                    : 'autoGrey.600'
                }
                onClick={() => handleSelect('SHEVROLET')}
              />
              <TopBrandCard
                icon={FordIcon}
                maxW="37px"
                maxH="40px"
                boxSize={6}
                bg={
                  selected.includes('FORD') ? 'autoOrange.100' : 'autoGrey.600'
                }
                onClick={() => handleSelect('FORD')}
              />
              <TopBrandCard
                icon={ToyotaIcon}
                maxW="37px"
                maxH="40px"
                boxSize={6}
                onClick={() => handleSelect('TOYOTA')}
                bg={
                  selected.includes('TOYOTA')
                    ? 'autoOrange.100'
                    : 'autoGrey.600'
                }
                display={
                  window.location.toString().includes('/catalog')
                    ? 'flex'
                    : 'none'
                }
              />
            </Flex>
            {optionsToShow.map((opt) => (
              <Box p="0" key={opt}>
                {opt.length === 1 ? (
                  <HeadingSecondary pt="4" fontSize="14px">
                    {opt}{' '}
                    <Divider w="40px" mt="6px" borderColor="autoGrey.400" />
                  </HeadingSecondary>
                ) : (
                  <TextButton
                    onClick={() => handleSelect(opt)}
                    isTruncated
                    maxW="full"
                    color={selected.includes(opt) ? 'autoOrange.500' : '#000'}
                  >
                    {capitalizeEach(opt)}
                  </TextButton>
                )}
              </Box>
            ))}
          </VStack>
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
