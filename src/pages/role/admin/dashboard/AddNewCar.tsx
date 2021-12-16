import {
  Center,
  Checkbox,
  FormControl,
  HStack,
  Select,
  Textarea,
  useToast
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import TextareaAutosize from 'react-textarea-autosize';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { Card } from 'src/components/molecules/Cards/Card';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { addDealerCar, getDealerCars } from 'src/redux/features/auth/carsSlice';
import { TransmissionEnum } from 'src/redux/features/auth/types';
import { isApiValidationError } from 'src/utils/functions/typeChecker';
import { HasKeys } from '../../../../../../server/shared_with_front/contants';
import { AddCarValues } from '../../../../../../server/shared_with_front/types/types-shared';

interface NewCarProps {}

export const AddNewCar: React.FC<NewCarProps> = () => {
  const transTypes = Object.values(TransmissionEnum);
  const { addingDealerCar } = useAppSelector((state) => state.carsReducer);
  const { catalogQuery } = useAppSelector((state) => state.globalAppState);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const initialValues: AddCarValues = {
    manufacturer: '',
    modelGroup: '',
    modelDetail: '',
    bodyStyle: '',
    damage: '',
    location: '',
    odometer: 0,
    cylinders: 0,
    drive: '',
    engine: 0,
    transmission: '',
    year: '',
    keys: '',
    fuelType: '',
    color: '',
    price: 0,
    description: '',
    photos: null,
  };
  return (
    <ContainerOuter pt={['32px', null, null, '40px']}>
      <Center>
        <Card w="500px" bg="#fff" p="4">
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setFieldError }) => {
              const { photos, keys, ...restValues } = values;
              const formdata = new FormData();
              // append values to formdata
              for (let key in restValues) {
                formdata.append(key, values[key]);
              }
              // append photos to the formdata
              if (photos) {
                for (let photo of photos) {
                  formdata.append('photo[]', photo);
                }
              }

              if (keys) {
                formdata.append('keys', HasKeys.YES);
              }

              // add new car
              const query = new URLSearchParams(catalogQuery);
              dispatch(addDealerCar(formdata))
                .unwrap()
                .then(() => {
                  dispatch(getDealerCars(query));
                  toast({
                    title: 'New car edded successfully',
                    position: 'top',
                    status: 'success',
                    duration: 1500,
                  });
                })
                .catch((error) => {
                  let message: string = '';
                  if (isApiValidationError(error)) {
                    if (error.status === 422) {
                      message = 'Fill in required fields';
                      setFieldError('manufacturer', 'required');
                    }
                  }
                  toast({
                    title: message,
                    position: 'top',
                    variant: 'solid',
                    status: 'error',
                    duration: 2000,
                  });
                });
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <HeadingSecondary>Add Car</HeadingSecondary>
                <FormikInput name="manufacturer" placeholder="Manufacturer" />
                <FormikInput name="modelGroup" placeholder="Model group" />
                <FormikInput name="modelDetail" placeholder="Model detail" />
                <FormikInput name="bodyStyle" placeholder="Body style" />
                <FormikInput name="damage" placeholder="damage" />
                <FormikInput name="location" placeholder="location" />
                <FormikInput
                  name="odometer"
                  placeholder="odometer"
                  type="number"
                  value={values.odometer || ''}
                />
                <FormikInput
                  name="cylinders"
                  placeholder="cylinders"
                  type="number"
                  value={values.cylinders || ''}
                />
                <FormikInput name="drive" placeholder="drive" />
                <FormikInput
                  name="engine"
                  type="number"
                  value={values.engine || ''}
                  placeholder="Engine capacity"
                />
                <Field name="transmission">
                  {({ field }) => (
                    <FormControl pt="2">
                      <Select
                        {...field}
                        bg="#EAEAEB"
                        opacity="0.5"
                        placeholder="Transmission"
                      >
                        {transTypes.map((tr) => (
                          <option key={tr} value={tr}>
                            {tr}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                </Field>
                <FormikInput
                  name="year"
                  placeholder="Year"
                  type="number"
                  value={values.year || ''}
                />
                <FormikInput name="fuelType" placeholder="Fuel type" />
                <FormikInput name="color" placeholder="Color" />
                <FormikInput
                  name="price"
                  placeholder="Price"
                  type="number"
                  value={values.price || ''}
                />
                <Field name="keys">
                  {({ field }) => (
                    <FormControl pt="2">
                      <HStack>
                        <Checkbox
                          colorScheme="autoOrange"
                          name="kes"
                          {...field}
                        />
                        <TextRegular>Has keys</TextRegular>
                      </HStack>
                    </FormControl>
                  )}
                </Field>
                <Field name="description">
                  {({ field }) => (
                    <Textarea
                      mt="2"
                      {...field}
                      placeholder="Write Description"
                      size="sm"
                      as={TextareaAutosize}
                      maxRows={10}
                    />
                  )}
                </Field>
                <Field name="photos">
                  {({ field }) => (
                    <input
                      type="file"
                      {...field}
                      multiple
                      value={undefined}
                      onChange={(e) => {
                        const files = e.currentTarget.files;
                        setFieldValue('photos', files);
                      }}
                    />
                  )}
                </Field>

                {/* Sumbit button  */}
                <ButtonRegular
                  type="submit"
                  mt="4"
                  mb="4"
                  isLoading={addingDealerCar}
                >
                  Add
                </ButtonRegular>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </ContainerOuter>
  );
};

export default AddNewCar;