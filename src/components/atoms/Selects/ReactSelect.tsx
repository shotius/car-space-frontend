import { Icon } from '@chakra-ui/react';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

type ReactSelectProps = React.ComponentProps<typeof Select>;



const multiValueContainer = ({ selectProps, data }) => {
  const label = data.label;
  const allSelected = selectProps.value;
  const index = allSelected.findIndex((selected) => selected.label === label);
  const isLastSelected = index === allSelected.length - 1;
  const labelSuffix = isLastSelected ? ' ' : ', ';
  const val = `${label}${labelSuffix} `;
  return (
    <TextRegular opacity="0.5" display="inline-block" mr="1">
      {val}
    </TextRegular>
  );
};

export const ReactSelect: React.FC<ReactSelectProps> = ({
  styles,
  ...rest
}) => {
  
const baseStylestyles: ReactSelectProps['styles'] = {
  control: (base) => ({
    ...base,
    bg: 'red',
    minHeight: '40px',
    overflow: 'hidden',
    border: 0,
    boxShadow: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "#F4F4F5",
      minWidth: "auto"
    };
  },
  valueContainer: (provided, state) => ({
    ...provided,
    overflow: 'ellipsis',
    maxWidth: "50px", 
    flexWrap: "nowrap",
    display: state.hasValue ? 'flex' : 'grid',
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: '16px',
    opacity: '0.8',
  }),
  clearIndicator: () => ({
    opacity: "0.5", 
    cursor: "pointer", 
    position: "absolute"
  }),
};

  const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <Icon as={DropdownIcon} opacity=".5" boxSize={5} display="none"/>
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      styles={styles || baseStylestyles}
      closeMenuOnSelect={false}
      blurInputOnSelect={false}
      hideSelectedOptions={false}
      isSearchable={false}
      isClearable={true}
      components={{
        MultiValueContainer: multiValueContainer,
        DropdownIndicator,
      }}
      {...rest}
    />
  );
};
