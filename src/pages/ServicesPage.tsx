import { Button } from '@chakra-ui/button';
import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Heading, VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { InputGrey } from 'src/components/molecules/Inputs/InputGrey';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';

interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string[]>([]);
  const [value, setValue] = useState<string>();
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    'Option1',
    'Option2',
    'Option3',
    'Option4',
    'Option5',
    'Option6',
    'Option7',
    'Option8',
    'Option9',
    'Option10',
  ];

  useEffect(() => {
    setValue(selected.join(', '))
  }, [selected.length])

  const handleSelect = (opt: string) => {
    setIsOpen(true);
    setSelected(selected.concat(opt));
  };

  return (
    <PublicLayout>
      <ContainerOuter>
        <Heading>Services</Heading>
        <VStack pt="8">
          <Box
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            bg="rgba(0, 0, 0, 0)"
            display={isOpen ? 'block' : 'none'}
            onClick={() => setIsOpen(false)}
          />
          <VStack w="400px" position="relative">
            <InputGroup
              onFocus={() => {
                setIsOpen(true);
                if(selected.length) {
                  setPlaceholder(selected)
                }
                setValue('')
              }}
              onBlur={() => {
                setValue('')
              }}
            >
              <InputGrey
                placeholder={placeholder.length ? placeholder.join(', ') : "Brands"}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                isTruncated
                _focus={{
                  bg: 'white',
                }}
                pr="32px"
              />
              {selected.length ? (
                <InputRightElement
                  children={<CloseIcon />}
                  cursor="pointer"
                  onClick={(e) => {
                    if (e.stopPropagation) e.stopPropagation();
                    setSelected([]);
                    setValue('')
                    setPlaceholder([])
                    setIsOpen(false)
                  }}
                />
              ) : (
                <InputRightElement
                  children={
                    <DropdownIcon
                      transform={isOpen ? 'rotate(180deg)' : ''}
                      transition="all .2s"
                    />
                  }
                  pointerEvents="painted"
                />
              )}
            </InputGroup>

            {/* Options  */}
            <VStack
              w="full"
              position="absolute"
              top="40px"
              h={isOpen ? '300px' : '0px'}
              transition="all .3s"
              bg="white"
              boxShadow="0px 3px 10px #00000029"
              borderRadius="8px"
              p={isOpen ? '8px 0' : '0'}
            >
              <VStack h="full" w="full" overflow="auto">
                {options.map((opt) => (
                  <Button onClick={() => handleSelect(opt)}>
                    <Heading>{opt}</Heading>
                  </Button>
                ))}
              </VStack>
            </VStack>
          </VStack>
          <VStack>
            <Heading>Content</Heading>
          </VStack>
        </VStack>
      </ContainerOuter>
    </PublicLayout>
  );
};

export default ServicesPage;
