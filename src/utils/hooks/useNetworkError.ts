import { useToast } from '@chakra-ui/react';
import { useRef } from 'react';
import { useAppSelector } from 'src/redux/app/hook';

export const useNetworkError = () => {
  const toast = useToast();

  const toastIdRef = useRef<any>();

  const networkError = useAppSelector(
    (state) => state.globalAppState.networkError
  );

  // if network error occurs notification will be displayed
  const NetworkErrorAlert = () => {
    toastIdRef.current = toast({
      title: networkError,
      status: 'error',
      position: 'top',
      duration: 3000,
      isClosable: true,
    });
  };

  const checkForNetworkError = () => {
    if (networkError) {
      NetworkErrorAlert();
    }
  };

  return { checkForNetworkError, NetworkErrorAlert };
};
