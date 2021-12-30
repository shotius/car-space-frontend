import { FormControl, Select } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { IOrderedCar } from '../../../../../server/shared_with_front/types/types-shared';

interface AddNewOrderFormProps {}

export const AddNewOrderForm: React.FC<AddNewOrderFormProps> = ({}) => {
  const initialValues: Omit<IOrderedCar, 'id'> = {
    carName: '',
    // deliveryAt?: Date,
    location: '',
    price: 0,
    status: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log('values: ', values);
      }}
    >
      {() => (
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
          <ButtonRegular mt="4" type="submit">Add Car</ButtonRegular>
        </Form>
      )}
    </Formik>
  );
};
