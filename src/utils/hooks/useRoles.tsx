import { useAppSelector } from 'src/redux/app/hook';
import { Roles } from '../../../../server/shared_with_front/contants';

export const useRoles = () => {
  const { role } = useAppSelector((state) => state.userInfoSlice);
  const isAdmin = role?.toLocaleLowerCase() === Roles.ADMIN.toLocaleLowerCase();
  return { isAdmin };
};
