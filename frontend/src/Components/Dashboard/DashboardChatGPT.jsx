import React from 'react';
import { Box, Heading, Text, Grid, VStack, useColorModeValue, Flex, Progress } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';
import SideBar from '../SideBar/SideBar';

// Updated course list with subject and progress
const courses = [
    { id: 1, title: 'Mathematics: Algebra Basics', subject: 'maths', status: 'completed', progress: 100 },
    { id: 2, title: 'Physics: Kinematics', subject: 'physics', status: 'ongoing', progress: 60 },
    { id: 3, title: 'Chemistry: Atomic Structure', subject: 'chemistry', status: 'not started', progress: 0 },
    { id: 4, title: 'Mathematics: Calculus', subject: 'maths', status: 'completed', progress: 100 },
    { id: 5, title: 'Physics: Laws of Motion', subject: 'physics', status: 'ongoing', progress: 75 },
    { id: 6, title: 'Chemistry: Chemical Bonding', subject: 'chemistry', status: 'completed', progress: 100 },
    { id: 7, title: 'Mathematics: Trigonometry', subject: 'maths', status: 'not started', progress: 0 },
    { id: 8, title: 'Physics: Work and Energy', subject: 'physics', status: 'ongoing', progress: 50 },
    { id: 9, title: 'Chemistry: Thermodynamics', subject: 'chemistry', status: 'completed', progress: 100 },
    { id: 10, title: 'Mathematics: Probability and Statistics', subject: 'maths', status: 'not started', progress: 0 },
    { id: 11, title: 'Physics: Electrostatics', subject: 'physics', status: 'completed', progress: 100 },
    { id: 12, title: 'Chemistry: Equilibrium', subject: 'chemistry', status: 'ongoing', progress: 40 },
    { id: 13, title: 'Mathematics: Complex Numbers', subject: 'maths', status: 'not started', progress: 0 },
    { id: 14, title: 'Physics: Current Electricity', subject: 'physics', status: 'completed', progress: 100 },
    { id: 15, title: 'Chemistry: Redox Reactions', subject: 'chemistry', status: 'ongoing', progress: 70 },
    { id: 16, title: 'Mathematics: Coordinate Geometry', subject: 'maths', status: 'completed', progress: 100 },
    { id: 17, title: 'Physics: Magnetic Effects of Current', subject: 'physics', status: 'not started', progress: 0 },
    { id: 18, title: 'Chemistry: Hydrocarbons', subject: 'chemistry', status: 'ongoing', progress: 55 },
    { id: 19, title: 'Mathematics: Vectors', subject: 'maths', status: 'completed', progress: 100 },
    { id: 20, title: 'Physics: Optics', subject: 'physics', status: 'not started', progress: 0 },
    { id: 21, title: 'Chemistry: Organic Chemistry Basics', subject: 'chemistry', status: 'completed', progress: 100 },
    { id: 22, title: 'Mathematics: Differential Equations', subject: 'maths', status: 'ongoing', progress: 80 },
    { id: 23, title: 'Physics: Thermodynamics', subject: 'physics', status: 'completed', progress: 100 },
    { id: 24, title: 'Chemistry: Solutions', subject: 'chemistry', status: 'not started', progress: 0 },
    { id: 25, title: 'Mathematics: Matrices and Determinants', subject: 'maths', status: 'completed', progress: 100 },
    { id: 26, title: 'Physics: Wave Optics', subject: 'physics', status: 'ongoing', progress: 65 },
    { id: 27, title: 'Chemistry: States of Matter', subject: 'chemistry', status: 'completed', progress: 100 },
    { id: 28, title: 'Mathematics: Sequences and Series', subject: 'maths', status: 'not started', progress: 0 },
    { id: 29, title: 'Physics: Modern Physics', subject: 'physics', status: 'completed', progress: 100 },
    { id: 30, title: 'Chemistry: Environmental Chemistry', subject: 'chemistry', status: 'ongoing', progress: 45 },
    { id: 31, title: 'Mathematics: Permutations and Combinations', subject: 'maths', status: 'completed', progress: 100 },
    { id: 32, title: 'Physics: Nuclear Physics', subject: 'physics', status: 'not started', progress: 0 },
    { id: 33, title: 'Chemistry: Coordination Compounds', subject: 'chemistry', status: 'completed', progress: 100 },
    { id: 34, title: 'Mathematics: Mathematical Reasoning', subject: 'maths', status: 'ongoing', progress: 50 },
    { id: 35, title: 'Physics: Elasticity', subject: 'physics', status: 'completed', progress: 100 },
    { id: 36, title: 'Chemistry: Periodic Table', subject: 'chemistry', status: 'not started', progress: 0 },
    { id: 37, title: 'Mathematics: Mathematical Logic', subject: 'maths', status: 'completed', progress: 100 },
    { id: 38, title: 'Physics: Fluid Mechanics', subject: 'physics', status: 'ongoing', progress: 60 },
    { id: 39, title: 'Chemistry: Organic Reaction Mechanisms', subject: 'chemistry', status: 'completed', progress: 100 },
    { id: 40, title: 'Mathematics: Conic Sections', subject: 'maths', status: 'not started', progress: 0 },
    { id: 41, title: 'Physics: Electromagnetic Waves', subject: 'physics', status: 'completed', progress: 100 },
    { id: 42, title: 'Chemistry: Chemical Kinetics', subject: 'chemistry', status: 'ongoing', progress: 70 },
    { id: 43, title: 'Mathematics: Integral Calculus', subject: 'maths', status: 'completed', progress: 100 },
    { id: 44, title: 'Physics: General Properties of Matter', subject: 'physics', status: 'not started', progress: 0 },
    { id: 45, title: 'Chemistry: Solid State Chemistry', subject: 'chemistry', status: 'completed', progress: 100 },
    { id: 46, title: 'Mathematics: Linear Programming', subject: 'maths', status: 'ongoing', progress: 50 },
    { id: 47, title: 'Physics: Relativity', subject: 'physics', status: 'completed', progress: 100 },
    { id: 48, title: 'Chemistry: Bioinorganic Chemistry', subject: 'chemistry', status: 'not started', progress: 0 },
    { id: 49, title: 'Mathematics: Statistics', subject: 'maths', status: 'completed', progress: 100 },
    { id: 50, title: 'Physics: Quantum Mechanics', subject: 'physics', status: 'ongoing', progress: 80 }
  ];
  

const CourseCard = ({ course }) => {
  // Determine background color based on the subject
  let bgColor;
  switch (course.subject) {
    case 'maths':
      bgColor = useColorModeValue('blue.100', 'blue.900');
      break;
    case 'physics':
      bgColor = useColorModeValue('green.100', 'green.900');
      break;
    case 'chemistry':
      bgColor = useColorModeValue('orange.100', 'orange.900');
      break;
    default:
      bgColor = useColorModeValue('gray.100', 'gray.700');
  }

  const cardBg = useColorModeValue('white', 'gray.800');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box 
      p={6} 
      borderWidth={1} 
      borderRadius="md" 
      shadow="md" 
      bg={cardBg}
      _hover={{ bg: hoverBg }}
      transition="background-color 0.2s"
    >
      <Heading size="md" mb={2} bg={bgColor} p={2} borderRadius="md">
        {course.title}
      </Heading>
      <Text mt={2} mb={4} color={course.status === 'completed' ? 'green.500' : 'yellow.500'}>
        {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
      </Text>
      <Progress value={course.progress} colorScheme="blue" size="sm" borderRadius="md" />
    </Box>
  );
};

const Dashboard = ({ name }) => {
  const completedCourses = courses.filter(course => course.status === 'completed');
  const ongoingCourses = courses.filter(course => course.status === 'ongoing');

  return (
    <>
      
      <Flex direction="column" p={4} maxW="7xl" mx="auto" mt={4} flexGrow={1}>
        <VStack spacing={4} align="stretch">
          <Box borderWidth={1} borderRadius="md" p={4} bg={useColorModeValue('white', 'gray.800')} shadow="md">
            <Heading size="lg" mb={4}>Hello, {name}</Heading>
          </Box>
          <Box borderWidth={1} borderRadius="md" p={4} bg={useColorModeValue('white', 'gray.800')} shadow="md">
            <Heading size="md" mb={4}>Ongoing Courses</Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
              {ongoingCourses.length > 0 ? (
                ongoingCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))
              ) : (
                <Text>No ongoing courses.</Text>
              )}
            </Grid>
          </Box>
          <Box borderWidth={1} borderRadius="md" p={4} bg={useColorModeValue('white', 'gray.800')} shadow="md">
            <Heading size="md" mb={4}>Completed Courses</Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
              {completedCourses.length > 0 ? (
                completedCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))
              ) : (
                <Text>No completed courses yet.</Text>
              )}
            </Grid>
          </Box>

          
        </VStack>
      </Flex>
    </>
  );
};

export default Dashboard;
