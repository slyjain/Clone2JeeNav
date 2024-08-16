import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import { Flex } from '@chakra-ui/react'

const courses = [
  { id: 1, title: 'Algebra Basics', subject: 'maths', progress: 100 },
  { id: 2, title: 'Kinematics', subject: 'physics', progress: 60 },
  { id: 3, title: 'Atomic Structure', subject: 'chemistry', progress: 0 },
  { id: 4, title: 'Calculus', subject: 'maths', progress: 100 },
  { id: 5, title: 'Laws of Motion', subject: 'physics', progress: 75 },
  { id: 6, title: 'Chemical Bonding', subject: 'chemistry', progress: 100 },
  { id: 7, title: 'Trigonometry', subject: 'maths', progress: 0 },
  { id: 8, title: 'Work and Energy', subject: 'physics', progress: 50 },
  { id: 9, title: 'Thermodynamics', subject: 'chemistry', progress: 100 },
  { id: 10, title: 'Probability and Statistics', subject: 'maths', progress: 0 },
  { id: 11, title: 'Electrostatics', subject: 'physics', progress: 100 },
  { id: 12, title: 'Equilibrium', subject: 'chemistry', progress: 40 },
  { id: 13, title: 'Complex Numbers', subject: 'maths', progress: 0 },
  { id: 14, title: 'Current Electricity', subject: 'physics', progress: 100 },
  { id: 15, title: 'Redox Reactions', subject: 'chemistry', progress: 70 },
  { id: 16, title: 'Coordinate Geometry', subject: 'maths', progress: 100 },
  { id: 17, title: 'Magnetic Effects of Current', subject: 'physics', progress: 0 },
  { id: 18, title: 'Hydrocarbons', subject: 'chemistry', progress: 55 },
  { id: 19, title: 'Vectors', subject: 'maths', progress: 100 },
  { id: 20, title: 'Optics', subject: 'physics', progress: 0 },
  { id: 21, title: 'Organic Chemistry Basics', subject: 'chemistry', progress: 100 },
  { id: 22, title: 'Differential Equations', subject: 'maths', progress: 80 },
  { id: 23, title: 'Thermodynamics', subject: 'physics', progress: 100 },
  { id: 24, title: 'Solutions', subject: 'chemistry', progress: 0 },
  { id: 25, title: 'Matrices and Determinants', subject: 'maths', progress: 100 },
  { id: 26, title: 'Wave Optics', subject: 'physics', progress: 65 },
  { id: 27, title: 'States of Matter', subject: 'chemistry', progress: 100 },
  { id: 28, title: 'Sequences and Series', subject: 'maths', progress: 0 },
  { id: 29, title: 'Modern Physics', subject: 'physics', progress: 100 },
  { id: 30, title: 'Environmental Chemistry', subject: 'chemistry', progress: 45 },
  { id: 31, title: 'Permutations and Combinations', subject: 'maths', progress: 100 },
  { id: 32, title: 'Nuclear Physics', subject: 'physics', progress: 0 },
  { id: 33, title: 'Coordination Compounds', subject: 'chemistry', progress: 100 },
  { id: 34, title: 'Mathematical Reasoning', subject: 'maths', progress: 50 },
  { id: 35, title: 'Elasticity', subject: 'physics', progress: 100 },
  { id: 36, title: 'Periodic Table', subject: 'chemistry', progress: 0 },
  { id: 37, title: 'Mathematical Logic', subject: 'maths', progress: 100 },
  { id: 38, title: 'Fluid Mechanics', subject: 'physics', progress: 60 },
  { id: 39, title: 'Organic Reaction Mechanisms', subject: 'chemistry', progress: 100 },
  { id: 40, title: 'Conic Sections', subject: 'maths', progress: 0 },
  { id: 41, title: 'Electromagnetic Waves', subject: 'physics', progress: 100 },
  { id: 42, title: 'Chemical Kinetics', subject: 'chemistry', progress: 70 },
  { id: 43, title: 'Integral Calculus', subject: 'maths', progress: 100 },
  { id: 44, title: 'General Properties of Matter', subject: 'physics', progress: 0 },
  { id: 45, title: 'Solid State Chemistry', subject: 'chemistry', progress: 100 },
  { id: 46, title: 'Linear Programming', subject: 'maths', progress: 50 },
  { id: 47, title: 'Relativity', subject: 'physics', progress: 100 },
  { id: 48, title: 'Bioinorganic Chemistry', subject: 'chemistry', progress: 0 },
  { id: 49, title: 'Statistics', subject: 'maths', progress: 100 },
  { id: 50, title: 'Quantum Mechanics', subject: 'physics', progress: 80 }
];

const Dashboard = ({ name }) => {
  const completedCourses=courses.filter(course=>course.progress===100)
  const ongoingCourses=courses.filter(course=>course.progress<100&&course.progress!=0)
  const notStartedCourse=courses.filter(courses=>course.progress===0)

  return (
    <>
      <Flex direction={`column`} p={4} maxW="7x1" mx="auto" mt={4} flexGrow={1}></Flex>


    </>

  )
}

export default Dashboard