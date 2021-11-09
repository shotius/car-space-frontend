import { Box, VStack } from '@chakra-ui/react';
import { useRouteMatch } from 'react-router-dom';
import { UserAvatar } from 'src/components/molecules/Avatars/UserAvatar';
import { Card } from 'src/components/molecules/Cards/Card';
import { ProfileNavLink } from 'src/components/molecules/Links/ProfileNavLink';
import { useAppDispatch } from 'src/redux/app/hook';
import { logoutUser } from 'src/redux/features/auth/authSlice';

interface UserCardProps {}

export const UserCard: React.FC<UserCardProps> = ({}) => {
  const { path } = useRouteMatch();
  const dispatch = useAppDispatch();
  return (
    <Card bg="white" p="0" w="full">
      <Box p="32px">
        <UserAvatar
          image="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
          mainText="Full Name"
          secondaryText="+995 123123123"
          size="70px"
          
        />
      </Box>
      <VStack pb="24px" spacing="0">
        <ProfileNavLink to={`${path}/order-list`}>Order List</ProfileNavLink>
        <ProfileNavLink to={`${path}/favourites`}>Favourites</ProfileNavLink>
        <ProfileNavLink
          to={'/home'}
          clickCallback={() => dispatch(logoutUser())}
        >
          Log out
        </ProfileNavLink>
      </VStack>
    </Card>
  );
};
