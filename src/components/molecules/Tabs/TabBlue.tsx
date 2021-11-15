import { Tab, TabProps } from "@chakra-ui/react";

interface TabBlueProps {}

export const TabBlue: React.FC<TabBlueProps & TabProps> = ({children, ...rest}) => {
  return (
    <Tab
      w="full"
      display="flex"
      justifyContent="start"
      _selected={{ color: 'white', bg: 'autoBlue.400', fontFamily: "Roboto Medium" }}
      {...rest}
    >
      {children}
    </Tab>
  );
};
