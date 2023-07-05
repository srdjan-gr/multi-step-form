import React from 'react'
import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button, Switch } from '@chakra-ui/react'

import arcadeIcon from '../images/icon-arcade.svg'
import advancedIcon from '../images/icon-advanced.svg'
import proIcon from '../images/icon-pro.svg'


const PlanInfo = ({ progress, setProgress }) => {


    return (
        <Stack >
            <CardBody w='380px' mr='35px'>
                <Heading as='h1' size='lg' color={'blue.900'}>Select your plan</Heading>
                <Text fontSize='sm' mb={10} color={'gray.400'}>You have the option of monthly billing.</Text>

                <Flex mb='25px' justifyContent='space-between'>

                    <Flex w='100px' border='1px solid #553C9A' borderRadius='5px' p='10px' flexDirection='column' justifyContent='flex-start' alignItems='flex-start' cursor='pointer'>
                        <Image src={arcadeIcon} h='28px' mb='30px' />
                        <Text as='h2' fontSize='14px' color={'blue.900'}>Arcade</Text>
                        <Text fontSize='12px' color={'gray.400'}>$9/mo</Text>
                    </Flex>

                    <Flex w='100px' border='1px solid #CBD5E0' borderRadius='5px' p='10px' flexDirection='column' justifyContent='flex-start' alignItems='flex-start' cursor='pointer'>
                        <Image src={advancedIcon} h='28px' mb='30px' />
                        <Text as='h2' fontSize='14px' color={'blue.900'}>Advanced</Text>
                        <Text fontSize='12px' color={'gray.400'}>$12/mo</Text>
                    </Flex>

                    <Flex w='100px' border='1px solid #CBD5E0' borderRadius='5px' p='10px' flexDirection='column' justifyContent='flex-start' alignItems='flex-start' cursor='pointer'>
                        <Image src={proIcon} h='28px' mb='30px' />
                        <Text as='h2' fontSize='14px' color={'blue.900'}>Pro</Text>
                        <Text fontSize='12px' color={'gray.400'}>$15/mo</Text>
                    </Flex>

                </Flex>



                <Flex w='100%' h='34px' bgColor={'gray.100'} borderRadius='5px' justifyContent='center' alignItems='center'>
                    <Text fontSize='10px' fontWeight='bold' mr={4} color={'blue.900'}>Monthly</Text>
                    <Switch colorScheme='button' id='email-alerts' />
                    <Text fontSize='10px' fontWeight='bold' ml={4} color={'blue.900'}>Yearly</Text>
                </Flex>

                <Flex alignItems='center' justifyContent='space-between' mt='60px'>
                    <Button colorScheme="button" color={'gray.400'} fontWeight='medium' fontSize='14px' variant='link' onClick={() => setProgress('personal')}>Go Back</Button>
                    <Button colorScheme="button" color='white' fontSize='12px' onClick={() => setProgress('addons')}>Next Step</Button>
                </Flex>


            </CardBody>
        </Stack>
    )
}

export default PlanInfo