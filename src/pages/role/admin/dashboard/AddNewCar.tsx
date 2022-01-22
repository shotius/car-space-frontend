import { Center, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { Card } from 'src/components/molecules/Cards/Card';
import { DealerList } from 'src/components/organizms/adminPage/DealerList';
import { NewCarForm } from 'src/components/organizms/Forms/NewCarForm';
import { IUser } from '../../../../../../server/shared_with_front/types/types-shared';

interface NewCarProps {}

export const AddNewCar: React.FC<NewCarProps> = () => {
  const [dealer, setDealer] = useState<IUser>();

  return (
    <ContainerOuter pt={['32px', null, null, '40px']}>
      <Center>
        <HStack w="full" justify="center">
          <Card w="500px" bg="#fff" p="4">
            <NewCarForm dealer={dealer} />
          </Card>
          <Card maxW="250px" w="full" alignSelf="flex-start" p="0">
            <DealerList onSelect={setDealer} />
          </Card>
        </HStack>
      </Center>
    </ContainerOuter>
  );
};

export default AddNewCar;
