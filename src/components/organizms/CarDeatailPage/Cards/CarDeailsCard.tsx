import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { CarSpecTable } from 'src/components/molecules/Tables/CarSpecTable';
import { ICar } from '../../../../../../server/shared_with_front/types/types-shared';

interface CarDeailsCardProps {
  variant: 'mobile' | 'desktop';
  car: ICar
}

export const CarDeailsCard: React.FC<CarDeailsCardProps> = ({
  variant,
  car
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
          <CarSpecTable car={car} />
        </CardWithHeading>
      ) : (
        <CardWithHeading heading="Car details">
          <CarSpecTable car={car}/>
        </CardWithHeading>
      )}
    </>
  );
};
