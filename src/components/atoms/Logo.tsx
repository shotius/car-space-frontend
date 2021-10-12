import { IconWithButton } from 'src/components/molecules/IconWithButton';
 ;
import { LogoIcon } from './Icons/LogoIcon';

type LogoProps = React.ComponentProps<typeof IconWithButton>;

export const Logo: React.FC<LogoProps> = ({
  icon = LogoIcon,
  boxSize = ['100px', null, '150px'],
  bg = 'transparent',
  p = '0',
  cursor = 'pointer',
  ...rest
}) => {
  return (
    <IconWithButton
      icon={icon}
      boxSize={boxSize}
      bg={bg}
      p={p}
      cursor={cursor}
      {...rest}
    />
  );
};
