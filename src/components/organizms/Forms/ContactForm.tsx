import { Textarea } from '@chakra-ui/textarea';
import { Field, Form, Formik } from 'formik';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import TextareaAutosize from 'react-textarea-autosize';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const initialValues = {
    name: '',
    phone: '',
    message: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <FormikInput name="name" placeholder="Name" />
          <FormikInput name="phone" placeholder="Phone" type="number" />
          <Field name="message">
            {({ field }) => (
              <Textarea
                mt="2"
                {...field}
                placeholder="Write message here..."
                size="sm"
                as={TextareaAutosize}
                maxRows={10}
              />
            )}
          </Field>
          <ButtonRegular type="submit" mt="4">Submit</ButtonRegular>
        </Form>
      )}
    </Formik>
  );
};
