import React, { useState } from 'react'
import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button, Switch, Spacer, ButtonGroup, Checkbox } from '@chakra-ui/react'



const Summary = ({ progress, setProgress }) => {


    return (
        <Stack >
            <CardBody w='380px' mr='35px'>

                <Flex as='section' flexDirection='column' justifyContent='space-between' height='full'>
                    <Box>
                        <Heading as='h1' size='lg' color={'blue.900'}>Finishing up</Heading>
                        <Text fontSize='sm' mb={8} color={'gray.400'}>Double-check everything looks OK before confirm.</Text>


                        <Flex as='section' flexDirection='column' backgroundColor='bgcomponent.50' borderRadius='5px' p={5} mb={5}>

                            <Flex as='article' w='full' alignItems='center' >
                                <Flex direction='column' >
                                    <Text as='h2' fontSize='13px' color={'blue.700'} fontWeight='bold'>Online service</Text>
                                    <Button colorScheme="button" color={'gray.400'} fontWeight='normal' textDecoration='underline' w='0px' fontSize='12px' variant='link' onClick={() => setProgress('plan')}>Change</Button>
                                </Flex>
                                <Text fontSize='13px' fontWeight='bold' color={'blue.900'} ml='auto'>$1/mo</Text>
                            </Flex>

                            <Spacer my={5} borderBottom='1px solid #E2E8F0' />

                            <Flex as='article' w='full' alignItems='center' mb={2}>
                                <Text fontSize='12px' color={'gray.400'} >Online service</Text>
                                <Text fontSize='12px' color={'blue.900'} ml='auto'>$1/mo</Text>
                            </Flex>

                            <Flex as='article' w='full' alignItems='center' >
                                <Text fontSize='12px' color={'gray.400'} >Larger storage</Text>
                                <Text fontSize='12px' color={'blue.900'} ml='auto'>$1/mo</Text>
                            </Flex>

                        </Flex>

                        <Flex as='article' w='full' alignItems='center' px={5}>
                            <Text fontSize='12px' color={'gray.400'} >Total (per month)</Text>
                            <Text fontSize='15px' color={'blue'} ml='auto' fontWeight='bold'>+$12/mo</Text>
                        </Flex>

                    </Box>


                    <ButtonGroup alignItems='center' spacing='auto'>
                        <Button colorScheme="button" color={'gray.400'} fontWeight='medium' fontSize='14px' variant='link' onClick={() => setProgress('addons')}>Go Back</Button>
                        <Button colorScheme="blue" color='white' fontSize='12px' onClick={() => setProgress('thankyou')}>Confirm</Button>
                    </ButtonGroup>
                </Flex>

            </CardBody>
        </Stack>
    )
}

export default Summary