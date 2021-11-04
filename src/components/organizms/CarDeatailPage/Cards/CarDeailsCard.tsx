import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { CarSpecTable } from 'src/components/molecules/Tables/CarSpecTable';

interface CarDeailsCardProps {
  variant: 'mobile' | 'desktop';
}

export const CarDeailsCard: React.FC<CarDeailsCardProps> = ({
  variant,
}) => {
  return (
    <>
      {variant === 'mobile' ? (
        <CardWithHeading
          heading="Car details"
          headingBg="transparent"
          bg="transparent"
          headinCl="#000"
          headingFontSize="20px"
          bodyPadding="0"
          headingPadding="12px 0px 25px 0px"
        >
          <CarSpecTable />
        </CardWithHeading>
      ) : (
        <CardWithHeading heading="Car details">
          <CarSpecTable />
        </CardWithHeading>
      )}
    </>
  );
};
