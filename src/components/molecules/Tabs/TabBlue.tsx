import { Tab } from "@chakra-ui/react";

interface TabBlueProps {}

export const TabBlue: React.FC<TabBlueProps> = ({children}) => {
  return (
    <Tab
      w="full"
      display="flex"
      justifyContent="start"
      _selected={{ color: 'white', bg: 'autoBlue.400' }}
    >
      {children}
    </Tab>
  );
};
