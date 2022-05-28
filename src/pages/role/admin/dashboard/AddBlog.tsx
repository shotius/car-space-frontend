import { Center } from '@chakra-ui/react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { Card } from 'src/components/molecules/Cards/Card';
import { AddBlogForm } from 'src/components/organizms/Forms/AddBlogForm';

interface AddBlogProps {}

const AddBlog: React.FC<AddBlogProps> = ({}) => {
  return (
    <ContainerOuter maxW="700px" pt={['32px', null, null, '40px']}>
      <Center>
        <Card w="full">
          <AddBlogForm />
        </Card>
      </Center>
    </ContainerOuter>
  );
};

export default AddBlog;
