import {
  HStack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProps,
  VStack,
} from '@chakra-ui/react';
import { HeadingSecondary } from '../../molecules/Headings/HeadingSecondary';
import { TabBlue } from '../../molecules/Tabs/TabBlue';
import { TextRegular } from '../../molecules/Texts/TextRegular';
import { ImportTaxCalculator } from '../../molecules/Calculator/ImportTaxCalculator';
import { LeasingCalculator } from '../../molecules/Calculator/LeasingCalculator';
import { LoanCalculator } from '../../molecules/Calculator/LoanCalculator';
import { TransportCalculator } from '../../molecules/Calculator/TransportCalculator';
import { createContext } from 'react';

interface CalculatorDesktopProps {
  size: 'regular' | 'large';
}

export const SizeContext =
  createContext<CalculatorDesktopProps['size']>('regular');

export const CalculatorDesktop: React.FC<CalculatorDesktopProps & TabsProps> =
  ({
    w = 'full',
    boxShadow = '0px 4px 15px rgba(0, 0, 0, .1)',
    h = '300px',
    children = 'adsf',
    size,
    ...rest
  }) => {
    return (
      <SizeContext.Provider value={size}>
        <Tabs
          w={w}
          maxW={size === 'regular' ? '441px' : '640px'}
          boxShadow={boxShadow}
          h={size === 'regular' ? '300px' : '407px'}
          borderRadius="8px"
          {...rest}
        >
          <HStack
            w="full"
            h="full"
            bg="#fff"
            alignItems="stretch"
            borderRadius="8px"
          >
            <TabList
              w={size === 'regular' ?"156px" : '226px'}
              bg="#F8F8F8"
              border="none"
              borderLeftRadius="8px"
            >
              <VStack w="full">
                <HeadingSecondary
                  p={
                    size === 'regular'
                    ? "24px 0px 16px 16px"
                      : '24px 0px 50px 16px'
                  }
                  w="full"
                >
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
            <TabPanels
              p={size === 'regular' ? '8px 16px 24px 8px' : '70px'}
              position="relative"
            >
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
      </SizeContext.Provider>
    );
  };
