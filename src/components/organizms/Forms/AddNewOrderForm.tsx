import { FormControl, Select, useToast } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { useAppDispatch } from 'src/redux/app/hook';
import {
  addOrder,
  updateOrderCar,
} from 'src/redux/features/orders/orderedCarSlice';
import { dateToYMD } from 'src/utils/functions/dateToYMD';
import {
  IOrderCarBase,
  IOrderedCar,
} from '../../../../../server/shared_with_front/types/types-shared';

interface AddNewOrderFormProps {
  operation: 'modifying' | 'adding';
  userId: string;
  closeDrawer: () => void;
  car?: IOrderedCar;
}

export const AddNewOrderForm: React.FC<AddNewOrderFormProps> = ({
  operation,
  userId,
  car,
  closeDrawer,
}) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  let initialValues: IOrderCarBase;

  car && operation === 'modifying'
    ? (initialValues = {
        carName: car.carName,
        //@ts-ignore
        deliveryAt: car.deliveryAt
          ? dateToYMD(car!.deliveryAt!.toString(), '-')
          : new Date(),
        location: car.location,
        price: car.price,
        status: car.status,
      })
    : (initialValues = {
        carName: '',
        deliveryAt: new Date(),
        location: '',
        price: 0,
        status: '',
      });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        operation === 'modifying' && car
          ? dispatch(
              updateOrderCar({ carId: car.id, props: { ...values, userId } })
            )
              .unwrap()
              .then(() => {
                setSubmitting(false);
                closeDrawer();
              })
              .catch((error) => {
                setSubmitting(false);
                toast({ title: error, status: 'error', position: 'top' });
                closeDrawer();
              })
          : dispatch(addOrder({ ...values, userId }))
              .unwrap()
              .then(() => {
                setSubmitting(false);
                closeDrawer();
              })
              .catch((error) => {
                toast({ title: error, status: 'error', position: 'top' });
                setSubmitting(false);
                closeDrawer();
              });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormikInput name="carName" placeholder="car name" />
          <FormikInput name="location" placeholder="Location" />
          <FormikInput name="price" placeholder="Price" type="number" />
          <Field name="status">
            {({ field }) => (
              <FormControl pt="2">
                <Select
                  {...field}
                  bg="#EAEAEB"
                  opacity="0.5"
                  placeholder="Status"
                >
                  <option value={'Completed'}>Completed</option>
                  <option value={'On The Way'}>On the way</option>
                </Select>
              </FormControl>
            )}
          </Field>
          <FormikInput
            name="deliveryAt"
            bg="#EAEAEB"
            opacity="0.5"
            placeholder="Status"
            type="date"
            label={`Delivery at:  dd/mm/yyyy`}
          />
          <ButtonRegular mt="4" type="submit" isLoading={isSubmitting}>
            {operation === "modifying" ? "Update car" : "Add Car"}
          </ButtonRegular>
        </Form>
      )}
    </Formik>
  );
};
