import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { ListAvatarItem } from 'src/components/molecules/ListAvatarItem';
import { useAppDispatch } from 'src/redux/app/hook';
import { getDealers } from 'src/redux/features/auth/userSlice';
import { IUser } from '../../../../../server/shared_with_front/types/types-shared';

interface DealerListProps {
  onSelect: (val: IUser) => void;
}

export const DealerList: React.FC<DealerListProps> = ({ onSelect }) => {
  const [dealers, setDealers] = useState<IUser[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchDealers();
  }, []);

  function fetchDealers() {
    dispatch(getDealers(''))
      .unwrap()
      .then((data) => setDealers(data));
  }

  return (
    <VStack w="full">
      {!dealers.length ? (
        <HeadingSecondary py="4">Dealers will Appear here</HeadingSecondary>
      ) : (
        dealers.map((dealer) => (
          <ListAvatarItem
            key={dealer.id}
            avatar={dealer.avatar}
            mainText={dealer.fullName}
            secondaryText={dealer.role}
            verified={dealer.verified}
            onClick={() => {
              onSelect(dealer);
            }}
          />
        ))
      )}
    </VStack>
  );
};
