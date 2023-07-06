import React from 'react'
import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button } from '@chakra-ui/react'


const PersonalInfo = ({ progress, setProgress }) => {


    return (
        <Stack >
            <CardBody w='380px' mr='35px'>
                <Flex as='section' flexDirection='column' justifyContent='space-between' height='full' w='full'>

                    <Box>
                        <Heading as='h1' size='lg' color={'blue.900'}>Personal info</Heading>
                        <Text fontSize='12px' mb={8} color={'gray.400'}>Please provide your name, email address, and phone number.</Text>

                        <FormControl>
                            <FormLabel fontSize='12px' color={'blue.700'} mb='4px'>Name</FormLabel>
                            <Input mb={4} placeholder='e.g. Stephen King' id='pname' />

                            <FormLabel fontSize='12px' color={'blue.700'} mb='4px'>Email address</FormLabel>
                            <Input mb={4} placeholder='e.g. stephenking@mail.com' id='email' />

                            <FormLabel fontSize='12px' color={'blue.700'} mb='4px'>Phone Number</FormLabel>
                            <Input mb={4} placeholder='e.g. +1 234 567 890' id='phone' />

                        </FormControl>
                    </Box>

                    <Box>
                        <Button colorScheme="button" float='right' color='white' fontSize='12px' onClick={() => setProgress('plan')}>Next Step</Button>
                    </Box>

                </Flex>
            </CardBody>
        </Stack>
    )
}

export default PersonalInfo