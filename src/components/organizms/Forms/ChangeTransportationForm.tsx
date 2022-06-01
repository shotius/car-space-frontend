import { useToast } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useMemo } from 'react';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import transportationService from 'src/services/transportation.service';
import {
  IBaseTransportationObject,
  ITransportDataObject,
} from '../../../../../server/shared_with_front/types/types-shared';

interface ChangeTransportationFormProps {
  initTransportation?: ITransportDataObject;
  successCb?: (trans: ITransportDataObject) => void;
  errorCb?: () => void;
}

export const ChangeTransportationForm: React.FC<
  ChangeTransportationFormProps
> = ({ initTransportation, successCb = () => {}, errorCb = () => {} }) => {
  const toast = useToast();
  const initialValues: IBaseTransportationObject = {
    auction: '',
    city: '',
    state: '',
    zip: '',
    price: 0,
  };

  const operation: 'modifing' | 'adding' = useMemo<'modifing' | 'adding'>(
    () => (initTransportation ? 'modifing' : 'adding'),
    [initTransportation]
  );

  function handleAddTransportation(transportation: IBaseTransportationObject) {
    return () =>
      transportationService
        .addOne(transportation)
        .then(({results}) => {
          successCb(results);
          toast({
            title: 'Transportation added',
            position: 'top',
            status: 'success',
          });
        })
        .catch(() => {
          errorCb();
          toast({
            title: 'Could not add transportation',
            status: 'error',
            position: 'top',
          });
        });
  }

  function handleUpdateTransportation(transportation: ITransportDataObject) {
    return () =>
      transportationService
        .updateById(transportation)
        .then(() => {
          successCb(transportation);
          toast({
            title: 'Transportation updated',
            position: 'top',
            status: 'success',
          });
        })
        .catch(() => {
          errorCb();
          toast({
            title: 'Could not update transportation',
            status: 'error',
            position: 'top',
          });
        });
  }

  const onSubmit = (values: IBaseTransportationObject, { setSubmitting }) => {
    const foo =
      operation === 'adding'
        ? handleAddTransportation(values)
        : handleUpdateTransportation({
            ...values,
            id: initTransportation?.id || '',
          });
    foo().finally(() => setSubmitting(false));
  };

  return (
    <Formik
      initialValues={initTransportation || initialValues}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormikInput name="auction" placeholder="Auction" label="Auction" />
          <FormikInput name="city" placeholder="City" label="City" />
          <FormikInput name="state" placeholder="State" label="State" />
          <FormikInput name="zip" placeholder="Zip" label="Zip" />
          <FormikInput
            name="price"
            type="number"
            placeholder="Price"
            label="Price"
          />
          <ButtonRegular mt="4" type="submit" isLoading={isSubmitting}>
            {operation === 'adding' ? 'Add new ' : 'Update'} Transportation
          </ButtonRegular>
        </Form>
      )}
    </Formik>
  );
};
