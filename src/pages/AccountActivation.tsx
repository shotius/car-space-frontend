import { Button, Center, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { setUserInfo } from 'src/redux/features/auth/userSlice';
import authService from 'src/services/authService';
import { Roles } from '../../../server/shared_with_front/contants';

interface AccountActivationProps {}

export const AccountActivation: React.FC<AccountActivationProps> = ({}) => {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState('Failed To Activate');
  const [isActivating, setIsActivating] = useState(false);
  const { hash } = useParams<{ hash: string }>();
  const dispatch = useAppDispatch();
  const role = useAppSelector((state) => state.userInfoSlice.role);
  const isAuth = useAppSelector((state) => state.userInfoSlice.isAuthenticated);
  const history = useHistory();
  const [countDown, setCountDown] = useState(5);
  const [showCountDown, setShowCountDown] = useState(false);

  useEffect(() => {
    if (isAuth) {
      setShowCountDown(true);
      setTimeout(() => history.replace(`/${role}/dashboard`), 5000);
      setInterval(() => setCountDown((prev) => prev - 1), 1000);
    }
  }, [isAuth]);

  useEffect(() => {
    setIsActivating(true);
    authService
      .verifyAccount(hash)
      .then(({ results: user }) => {
        setSuccess(true);
        setError('');
        setIsActivating(false);
        localStorage.setItem('USER_ROLE', user.role);
        dispatch(setUserInfo(user));
      })
      .catch((error) => {
        setSuccess(false);
        setIsActivating(false);
        setError(error.response.data.error);
      });
  }, []);

  if (isActivating) {
    return (
      <Center h="90vh">
        <HeadingSecondary>Activating...</HeadingSecondary>
      </Center>
    );
  }

  return (
    <Center h="90vh">
      <VStack>
        <HeadingSecondary
          color={success ? 'autoOrange.500' : 'red'}
          fontSize={['24px', '32px', null, '48px']}
        >
          {success
            ? 'Account activated successfully!'
            : error || 'Failed to Activate'}
        </HeadingSecondary>
        <Button variant="link" color="black">
          {role ? (
            <Link to={`/${Roles.USER}/dashboard`}>go to profile</Link>
          ) : (
            <Link to="/home">go to home</Link>
          )}
        </Button>
        {showCountDown && (
          <TextRegular>
            redirecting in <span style={{ color: 'red' }}>{countDown}</span>{' '}
            seconds
          </TextRegular>
        )}
      </VStack>
    </Center>
  );
};

export default AccountActivation;
