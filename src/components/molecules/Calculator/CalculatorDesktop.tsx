import {
  Divider,
  HStack,
  RadioGroup,
  Spacer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { Radio } from 'src/components/atoms/Radio';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { InputGrey } from '../Inputs/InputGrey';
import { TabBlue } from '../Tabs/TabBlue';
import { TextRegular } from '../Texts/TextRegular';
import { TransportCalculator } from './TransportCalculator';

interface CalculatorDesktopProps {}

export const CalculatorDesktop: React.FC<CalculatorDesktopProps> = ({}) => {
  return (
    <Tabs w="full">
      <HStack
        w="full"
        h="310px"
        bg="#fff"
        alignItems="stretch"
        pt="0px !important"
        borderRadius="8px"
      >
        <TabList
          pb="10px"
          w="156px"
          bg="#F8F8F8"
          border="none"
          borderLeftRadius="8px"
          h="full"
        >
          <VStack w="full">
            <HeadingSecondary p="24px 0px 16px 16px" w="full">
              Calculator
            </HeadingSecondary>
            <TabBlue>
              <TextRegular>Transport</TextRegular>
            </TabBlue>
            <TabBlue>
              <TextRegular>Import tax</TextRegular>
            </TabBlue>
            <TabBlue>
              <TextRegular>Loan</TextRegular>
            </TabBlue>
            <TabBlue>
              <TextRegular>Leasing</TextRegular>
            </TabBlue>
          </VStack>
        </TabList>
        <TabPanels p="8px 16px 24px 16px">
          <TabPanel h="full">
            <TransportCalculator />
          </TabPanel>
          <TabPanel h="full">
            <VStack w="full" h="full" spacing="32px">
              <RadioGroup w="full">
                <HStack w="full" spacing="38px">
                  <Radio value="1">
                    <TextRegular opacity=".4">Hybrid</TextRegular>
                  </Radio>
                  <Radio value="2">
                    <TextRegular opacity=".4">Electric</TextRegular>
                  </Radio>
                </HStack>
              </RadioGroup>
              <VStack w="full">
                <InputGrey placeholder="Year" type="number" />
                <InputGrey placeholder="Engine" type="number"/>
              </VStack>
              <Spacer />
              <Divider />
              <HStack w="full" justify="space-between">
                <TextRegular>Total</TextRegular>
                <HeadingSecondary color="autoOrange.500">$ 200</HeadingSecondary>
              </HStack>
            </VStack>
          </TabPanel>
          <TabPanel>
            <TextRegular>Loan</TextRegular>
          </TabPanel>
          <TabPanel>
            <TextRegular>Leasing</TextRegular>
          </TabPanel>
        </TabPanels>
      </HStack>
    </Tabs>
  );
};
