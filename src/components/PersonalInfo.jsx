import React from 'react'
import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button } from '@chakra-ui/react'


const PersonalInfo = ({ progress, nextForm }) => {


    return (
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

                    <Button colorScheme="button" color='white' mt='60px' float='right' fontSize='12px' onClick={nextForm}>Next Step</Button>
                </FormControl>

            </CardBody>
        </Stack>
    )
}

export default PersonalInfo