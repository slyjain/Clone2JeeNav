import React from 'react';
import { Button, Box, VStack, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import { FaTachometerAlt, FaBook, FaExclamationTriangle, FaChartLine, FaQuestionCircle } from 'react-icons/fa';

const SideBar = () => {
  const sidebarBg = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.400');
  const iconColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box className="sidebar fixed top-20 left-0 w-64 h-screen overflow-y-auto" bg={sidebarBg} color={textColor} p={4}>
      <VStack align="start" spacing={6}>
        <Box className="Learn font-bold" color={iconColor}>
          Learn
          <List spacing={2} mt={2}>
            <ListItem>
              <Button variant="ghost" leftIcon={<FaTachometerAlt />} justifyContent="flex-start" w="full">
                Dashboard
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="ghost" leftIcon={<FaBook />} justifyContent="flex-start" w="full">
                Learn
              </Button>
            </ListItem>
          </List>
        </Box>

        <Box className="Practice font-bold" color={iconColor}>
          Practice
          <List spacing={2} mt={2}>
            <ListItem>
              <Button variant="ghost" leftIcon={<FaExclamationTriangle />} justifyContent="flex-start" w="full">
                Wrong Attempts
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="ghost" leftIcon={<FaChartLine />} justifyContent="flex-start" w="full">
                Test Analysis
              </Button>
            </ListItem>
          </List>
        </Box>

        <Box className="grow font-bold" color={iconColor}>
          Doubt
          <List spacing={2} mt={2}>
            <ListItem>
              <Button variant="ghost" leftIcon={<FaQuestionCircle />} justifyContent="flex-start" w="full">
                Forum
              </Button>
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Box>
  );
}

export default SideBar;
