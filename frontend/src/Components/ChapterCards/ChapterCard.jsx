import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Divider, CardFooter, Button, Progress } from '@chakra-ui/react';

const ChapterCard = ({ TopicName, ImageSrc, ImageAlt }) => {
  return (
    <Card maxW="sm" border="2px" borderColor="gray.300" borderRadius="lg" height={"400px"} width={"350px"}>
      <CardBody>
        <Image src={ImageSrc} alt={ImageAlt} borderRadius='lg'/>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{TopicName}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter display="flex" flexDirection="column" alignItems="start">
        <Button variant="ghost" colorScheme="blue" mb={3}>Start Now</Button>
        <Progress value={80} colorScheme="blue" w="full" borderRadius="md" />
      </CardFooter>
    </Card>
  );
}

export default ChapterCard;
