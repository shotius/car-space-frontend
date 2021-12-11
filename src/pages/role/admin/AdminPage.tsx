import {
  Center,
  Checkbox,
  FormControl,
  HStack,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import TextareaAutosize from 'react-textarea-autosize';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { Card } from 'src/components/molecules/Cards/Card';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import {
  Keys,
  Transmission,
  TransmissionEnum,
} from 'src/redux/features/auth/types';
import { axios } from 'src/utils/axios';

interface AdminProps {}
interface AddCarValues {
  manufacturer: string;
  modelGroup: string;
  modelDetail: string;
  bodyStyle: string;
  damage: string;
  location: string;
  odometer: number;
  cylinders: number;
  drive: string;
  engine: number;
  transmission: Transmission | '';
  year: string;
  hasKeys: Keys | '';
  fuelType: string;
  color: string;
  price: number;
  description: string;
  photos: FileList | null;
}

export const AdminPage: React.FC<AdminProps> = () => {
  const transTypes = Object.values(TransmissionEnum);

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
    hasKeys: '',
    fuelType: '',
    color: '',
    price: 0,
    description: '',
    photos: null,
  };
  return (
    <PublicLayout>
      <ContainerOuter pt={['32px', null, null, '40px']}>
        <Center>
          <Card w="500px" bg="#fff" p="4">
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                const { photos, ...restValues } = values;
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

                // console.log(values)

                for (let enty of formdata.entries()) {
                  console.log(enty[0] + ': ' + enty[1]);
                }
                axios
                  .post('/api/dealers/cars', formdata)
                  .then((data) => console.log('response: ', data))
                  .catch((erro) => console.log('rejected', erro));
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
                  <Field name="hasKeys">
                    {({ field }) => (
                      <FormControl pt="2">
                        <HStack>
                          <Checkbox
                            colorScheme="autoOrange"
                            name="hasKeys"
                            value="YES"
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
                  <ButtonRegular type="submit" mt="4" mb="4">
                    Add
                  </ButtonRegular>
                </Form>
              )}
            </Formik>
          </Card>
        </Center>
      </ContainerOuter>
    </PublicLayout>
  );
};

export default AdminPage;
