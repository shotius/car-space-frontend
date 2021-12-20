import { Box, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { UserAvatar } from 'src/components/molecules/Avatars/UserAvatar';
import { Card } from 'src/components/molecules/Cards/Card';
import { ProfileNavLink } from 'src/components/molecules/Links/ProfileNavLink';
import { ChangePictureModalTemplate } from 'src/components/templates/Modals/ChangePictureModalTemplate';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { logoutUser } from 'src/redux/features/auth/authSlice';

interface UserCardProps {}

export const UserCard: React.FC<UserCardProps> = ({}) => {
  const [avatar, setAvatar] = useState('');
  const { path } = useRouteMatch();
  const dispatch = useAppDispatch();
  const {
    avatar: initAvatar,
    fullName,
    phone,
  } = useAppSelector((state) => state.userInfoSlice);

  // sometimes user photo does not apper so this effect shoulb be here
  useEffect(() => {
    if (initAvatar) {
      setAvatar(initAvatar);
    }
  }, [initAvatar]);

  return (
    <Card bg="white" p="0" w={['full', null, null, '200px']} maxH="400px">
      <Box p="32px">
        <UserAvatar
          username={fullName}
          image={avatar}
          secondaryText={`+995 ${phone}`}
          size="70px"
          showPhotoChange={true}
        />
      </Box>
      <ChangePictureModalTemplate />
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
