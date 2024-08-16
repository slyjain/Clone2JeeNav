import React from 'react';
import { Tab, TabList, Tabs, TabPanel, TabPanels, useColorModeValue, Divider } from '@chakra-ui/react';
import ChapterList from '../ChapterList/ChapterList';

const LearnColumn = () => {
  const mathsHoverColor = useColorModeValue('#007BFF', '#1E90FF'); 
  const physicsHoverColor = useColorModeValue('#FFA500', '#FF8C00');
  const chemistryHoverColor = useColorModeValue('#28A745', '#32CD32');

  const tabBg = useColorModeValue('gray.100', 'gray.800');
  const tabSelectedBg = useColorModeValue('gray.300', 'gray.600');
  const tabTextColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <div className="learnColumn">
      <Tabs variant='soft-rounded' colorScheme="blue">
        <TabList>
          <div className="tabs pt-4 pr-4 pl-4">
            <Tab 
              _hover={{ color: mathsHoverColor, bg: tabSelectedBg }} 
              bg={tabBg} 
              color={tabTextColor} 
              borderRadius="md"
            >
              Maths
            </Tab>
          </div>
          <div className="tabs pt-4 pr-4 pl-4">
            <Tab 
              _hover={{ color: physicsHoverColor, bg: tabSelectedBg }} 
              bg={tabBg} 
              color={tabTextColor} 
              borderRadius="md"
            >
              Physics
            </Tab>
          </div>
          <div className="tabs pt-4 pr-4 pl-4">
            <Tab 
              _hover={{ color: chemistryHoverColor, bg: tabSelectedBg }} 
              bg={tabBg} 
              color={tabTextColor} 
              borderRadius="md"
            >
              Chemistry
            </Tab>
          </div>
          {/* <Divider/> */}
        </TabList>
        <TabPanels>
          <TabPanel>
            <ChapterList subject={'maths'} />
          </TabPanel>
          <TabPanel>
          <ChapterList subject={'physics'} />
          </TabPanel>
          <TabPanel>
          <ChapterList subject={'chemistry'} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default LearnColumn;
