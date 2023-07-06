import React, { useState } from 'react'
import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button, Switch, Spacer, ButtonGroup } from '@chakra-ui/react'


import PlanMonth from './PlanMonth'
import PlanYear from './PlanYear'


const PlanInfo = ({ progress, setProgress }) => {

    const [plan, setPlan] = useState(false)




    return (
        <Stack >
            <CardBody w='380px' mr='35px'>

                <Flex as='section' flexDirection='column' justifyContent='space-between' height='full'>
                    <Box>
                        <Heading as='h1' size='lg' color={'blue.900'}>Select your plan</Heading>
                        <Text fontSize='sm' mb={8} color={'gray.400'}>You have the option of monthly billing.</Text>

                        {plan ? (<PlanYear />) : (<PlanMonth />)}

                        <Flex w='100%' h='34px' bgColor={'gray.100'} borderRadius='5px' justifyContent='center' alignItems='center'>
                            <Text fontSize='10px' fontWeight='bold' mr={4} color={!plan ? 'blue.900' : 'gray.400'} >Monthly</Text>
                            <Switch colorScheme='button' id='email-alerts' onChange={() => setPlan(!plan)} />
                            <Text fontSize='10px' fontWeight='bold' ml={4} color={!plan && 'gray.400'} >Yearly</Text>
                        </Flex>
                    </Box>


                    <ButtonGroup alignItems='center' spacing='auto'>
                        <Button colorScheme="button" color={'gray.400'} fontWeight='medium' fontSize='14px' variant='link' onClick={() => setProgress('personal')}>Go Back</Button>

                        <Button colorScheme="button" color='white' fontSize='12px' onClick={() => setProgress('addons')}>Next Step</Button>
                    </ButtonGroup>
                </Flex>

            </CardBody>
        </Stack>
    )
}

export default PlanInfo