import { Button, ButtonGroup } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import {
  Box,
  Container, Flex,
  HStack,
  Stack,
  StackDivider
} from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { DividerVertical } from 'components/atoms/Divider';
import { Card } from 'components/molecules/Card';
import { SearchButton } from 'components/molecules/SearchButton';
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader';
import React from 'react';

interface CalculatorProps {}

export const Calculator: React.FC<CalculatorProps> = () => {
  return (
    <Box w="full">
      <Container maxW={{ base: '664px', xl: '970px' }}>
        <Card bg="autoBlue.400" p={{lg: "32px", xl: "48px"}}>
          <SectionHeader mainText="Calculator" color="white" />
          <Stack spacing="4">
            <HStack
              bg="white"
              borderRadius="8px"
              divider={<StackDivider />}
              p="2"
            >
              <Select
                placeholder="Brand"
                border="none"
                color="autoGrey.900"
                opacity="90%"
              ></Select>
              <Select
                placeholder="Model"
                border="none"
                color="autoGrey.900"
                opacity="90%"
              ></Select>
              <Select
                placeholder="Year"
                border="none"
                color="autoGrey.900"
                opacity="90%"
              ></Select>
            </HStack>
            <Flex
              borderRadius="8px"
              p="2"
              alignItems="center"
              justify="space-between"
              bg="white"
              position="relative"
              pr="156px"
            >
              <Input border="none" placeholder="From" flex="1" />
              <DividerVertical height="33px" borderColor="autoGrey.500" />
              <Input border="none" placeholder="From" flex="1" />
              <ButtonGroup
                spacing="0"
                w="156px"
                position="absolute"
                right="0"
                h="full"
              >
                <Button flex="1" h="full">
                  $
                </Button>
                <Button bg="autoBlue.400" color="#fff" flex="1" h="full">
                  $
                </Button>
                <Button flex="1" h="full">
                  $
                </Button>
              </ButtonGroup>
            </Flex>
            <Box bg="white" p="2" borderRadius="4">
              <Input border="none" />
            </Box>
            <SearchButton w="100px" h="40px" alignSelf="flex-end" />
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};
