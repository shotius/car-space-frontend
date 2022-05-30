import { Form, Formik } from 'formik';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import {
  IBaseTransportationObject,
  ITransportDataObject,
} from '../../../../../server/shared_with_front/types/types-shared';

interface ChangeTransportationFormProps {
  initTransportation?: ITransportDataObject;
  operation?: 'modifing' | 'adding';
}

export const ChangeTransportationForm: React.FC<
  ChangeTransportationFormProps
> = ({ initTransportation, operation = 'adding' }) => {
  const initialValues: IBaseTransportationObject = {
    auction: '',
    city: '',
    state: '',
    zip: '',
    price: 0,
  };

  const onSubmit = (values: IBaseTransportationObject, {}) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initTransportation || initialValues}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <FormikInput name="auction" />
          <FormikInput name="city" />
          <FormikInput name="state" />
          <FormikInput name="zip" />
          <FormikInput name="price" type="number" />
          <ButtonRegular type="submit">Change Transportation</ButtonRegular>
        </Form>
      )}
    </Formik>
  );
};
