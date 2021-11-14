import { Icon } from '@chakra-ui/react';

import Select, { components, DropdownIndicatorProps } from 'react-select';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';

type ReactSelectProps = React.ComponentProps<typeof Select>;

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon as={DropdownIcon} opacity=".5" boxSize={5} />
    </components.DropdownIndicator>
  );
};

const baseStylestyles: ReactSelectProps['styles'] = {
  control: (base) => ({
    ...base,
    minHeight: '40px',
    // overflow: "hidden", 
    display: "flex", 
    flexWrap: "nowrap", 
    border: 0,
    boxShadow: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: '16px',
    opacity: '0.8',
  }),
};

export const ReactSelect: React.FC<ReactSelectProps> = ({
  styles,
  ...rest
}) => {
  return (
    <Select
      components={{ DropdownIndicator }}
      styles={styles || baseStylestyles}
      {...rest}

    />
  );
};
