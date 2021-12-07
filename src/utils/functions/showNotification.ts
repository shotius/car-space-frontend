interface Props {
  toast: any;
  message: string;
}
export const showErrorNotification = ({ toast, message }: Props) => {
  toast({
    title: message,
    status: 'error',
    duration: 2000,
    isClosable: true,
    position: 'top',
  });
};
