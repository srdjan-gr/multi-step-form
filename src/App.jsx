import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button } from '@chakra-ui/react'
import { useState } from 'react'
import sidebarImg from './images/bg-sidebar-desktop.svg'


function App() {

  return (
    <Flex justifyContent='center' alignItems='center' h='100vh' bgColor={'blue.50'}>

      <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bgColor={'whiteAlpha.900'} p='15px' border='none' boxShadow='lg' borderRadius='10px'>
        <Image mr='60px' h='480px' src={sidebarImg} />

        <Stack position='absolute' top='50px' left={10}>
          <Flex justifyContent='flex-start' alignItems='center' gap={4} mb='10px'>
            <Box w='25px' h='25px' color='white' border='1px solid white' borderRadius='500px' textAlign='center' fontSize='14px'>
              <Text>1</Text>
            </Box>

            <Flex direction='column'>
              <Heading textTransform='uppercase' fontSize='10px' color={'gray.400'} >Step 1</Heading>
              <Text textTransform='uppercase' fontSize='12px' color='white'>Your Info</Text>
            </Flex>
          </Flex>

          <Flex justifyContent='flex-start' alignItems='center' gap={4} mb='10px'>
            <Box w='25px' h='25px' color='white' border='1px solid white' borderRadius='500px' textAlign='center' fontSize='14px'>
              <Text>2</Text>
            </Box>

            <Flex direction='column'>
              <Heading textTransform='uppercase' fontSize='10px' color={'gray.400'} >Step 2</Heading>
              <Text textTransform='uppercase' fontSize='12px' color='white'>Select Plan</Text>
            </Flex>
          </Flex>

          <Flex justifyContent='flex-start' alignItems='center' gap={4} mb='10px'>
            <Box w='25px' h='25px' color='white' border='1px solid white' borderRadius='500px' textAlign='center' fontSize='14px'>
              <Text>3</Text>
            </Box>

            <Flex direction='column'>
              <Heading textTransform='uppercase' fontSize='10px' color={'gray.400'} >Step 3</Heading>
              <Text textTransform='uppercase' fontSize='12px' color='white'>Add-Ons</Text>
            </Flex>
          </Flex>

          <Flex justifyContent='flex-start' alignItems='center' gap={4} mb='10px'>
            <Box w='25px' h='25px' color='white' border='1px solid white' borderRadius='500px' textAlign='center' fontSize='14px'>
              <Text>4</Text>
            </Box>

            <Flex direction='column'>
              <Heading textTransform='uppercase' fontSize='10px' color={'gray.400'} >Step 4</Heading>
              <Text textTransform='uppercase' fontSize='12px' color='white'>Summary</Text>
            </Flex>
          </Flex>
        </Stack>

        <Stack >
          <CardBody w='440px' mr='45px'>
            <Heading as='h1' size='lg' color={'blue.900'}>Personal info</Heading>

            <Text fontSize='sm' mb={10} color={'gray.400'}>Please provide your name, email address, and phone number.</Text>


            <FormControl>
              <FormLabel fontSize='12px' color={'blue.700'} mb='4px'>Name</FormLabel>
              <Input mb={5} placeholder='e.g. Stephen King' id='pname' />

              <FormLabel fontSize='12px' color={'blue.700'} mb='4px'>Email address</FormLabel>
              <Input mb={5} placeholder='e.g. stephenking@mail.com' id='email' />

              <FormLabel fontSize='12px' color={'blue.700'} mb='4px'>Phone Number</FormLabel>
              <Input mb={5} placeholder='e.g. +1 234 567 890' id='phone' />

              <Button colorScheme="button" color='white' mt='60px' float='right' fontSize='12px'>Next Step</Button>

            </FormControl>

          </CardBody>
        </Stack>

      </Card>
    </Flex >
  )
}

export default App
