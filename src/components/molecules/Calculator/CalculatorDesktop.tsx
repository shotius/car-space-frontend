import {
  HStack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TabBlue } from '../Tabs/TabBlue';
import { TextRegular } from '../Texts/TextRegular';
import { ImportTaxCalculator } from './ImportTaxCalculator';
import { LeasingCalculator } from './LeasingCalculator';
import { LoanCalculator } from './LoanCalculator';
import { TransportCalculator } from './TransportCalculator';

interface CalculatorDesktopProps {}

export const CalculatorDesktop: React.FC<CalculatorDesktopProps> = ({}) => {
  return (
    <Tabs
      w="full"
      boxShadow="0px 1px 15px #00000029"
      h="299px"
      borderRadius="8px"
    >
      <HStack
        w="full"
        h="full"
        bg="#fff"
        alignItems="stretch"
        borderRadius="8px"
      >
        <TabList
          // pb="10px"
          w="156px"
          bg="#F8F8F8"
          border="none"
          borderLeftRadius="8px"
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
        <TabPanels p="8px 16px 24px 8px" position="relative">
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
            <LeasingCalculator />
          </TabPanel>
        </TabPanels>
      </HStack>
    </Tabs>
  );
};
