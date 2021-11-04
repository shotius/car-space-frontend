import { Center, Divider, Flex } from '@chakra-ui/react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { Select } from 'src/components/atoms/Selects';
import { Card } from '../../../molecules/Cards/Card';
import { SearchButton } from '../../../molecules/Buttons/SearchButton';


interface SearchProps {}

export const HomeFilters: React.FC<SearchProps> = () => {
  return (
    <Center
      mt={['-69px', '-80px', '-65px', '-60px']}
      mb={{ base: '16', md: '20' }}
      position="relative"
      zIndex="1"
    >
      <Card
        maxW={{ sm: '550px', md: '600px', lg: '844px', xl: '82%' }}
        bg="autoBlue.400"
        p={{ base: '4', lg: '16px'}}
        mb="0"
        minH="auto"
        w={['100%', '90%', '100%']}
      >
        <Flex
          padding={['1', '1.5', null, '8px']}
          bg="#fff"
          borderRadius="lg"
          alignItems="center"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justifyContent="space-between"
        >
          <Select placeholder="Brand" w={['100%', '30%', '100%']} arrowColor="#848484">
            <option value="value">brand</option>
            <option value="value">brand</option>
            <option value="value">brand</option>
          </Select>
          <DividerVertical
            height="40px"
            display={['none', 'block']}
            borderColor="gray.300"
            margin={[null, null, "4"]}
          />
          <Divider display={['block', 'none', 'none']} borderColor="gray.300" />

          <Select placeholder="Model" w={['100%', '30%', '100%']} arrowColor="#848484">
            <option value="value">model</option>
            <option value="value">model</option>
            <option value="value">model</option>
          </Select>
          <DividerVertical
            height = {['44px', null, '40px', null,null,  '50px']}
            display={['none', 'block']}
            borderColor="gray.300"
            margin={[null, null, "4"]}
          />
          <Divider display={['block', 'none']} borderColor="gray.300" />

          <Select placeholder="Year" w={['100%', '30%', '100%']} arrowColor="#848484">
            <option value="value">year</option>
            <option value="value">year</option>
            <option value="value">year</option>
          </Select>
          <SearchButton
            display={['none', 'none', 'block']}
            flexBasis={['100%', null, null, '70%', '80%']}
            ml={[null, null, "8px", '24px']}
            w={{xl: "144px", "2xl": "55px"}}
            // h="60px"
          />
        </Flex>
          <SearchButton
            display={['block', 'block', 'none']}
            w="full"
            h={["44px",null, null,"50px",  "62px"]}
            mt={['4', '3']}
            // pl={[null, null, '4']}
          />
      </Card>
    </Center>
  );
};
