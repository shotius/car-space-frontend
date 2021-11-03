import {
  Box,
  Divider,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack
} from '@chakra-ui/react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { InputGrey } from '../Inputs/InputGrey';
import { TabBlue } from '../Tabs/TabBlue';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatroFooter } from './CalculatroFooter';
import { ImportTaxCalculator } from './ImportTaxCalculator';
import { LoanCalculator } from './LoanCalculator';
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
            <ImportTaxCalculator />
          </TabPanel>
          <TabPanel h="full">
           <LoanCalculator />
          </TabPanel>
          <TabPanel>
            <TextRegular>Leasing</TextRegular>
          </TabPanel>
        </TabPanels>
      </HStack>
    </Tabs>
  );
};
