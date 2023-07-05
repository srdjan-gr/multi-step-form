import React from 'react'
import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button } from '@chakra-ui/react'


const ProgressBar = ({ progress }) => {


    return (
        <Stack position='absolute' top='50px' left={10}>
            <Flex justifyContent='flex-start' alignItems='center' gap={4} mb='10px'>

                <Box bgColor={progress === 1 && 'blue.200'} color={progress === 1 ? 'blue.900' : 'white'}
                    w='25px' h='25px' border='1px solid white' borderRadius='500px' textAlign='center' fontSize='14px'>
                    <Text>1</Text>
                </Box>

                <Flex direction='column'>
                    <Heading textTransform='uppercase' fontSize='10px' color={'gray.400'} >Step 1</Heading>
                    <Text textTransform='uppercase' fontSize='12px' color='white'>Your Info</Text>
                </Flex>
            </Flex>

            <Flex justifyContent='flex-start' alignItems='center' gap={4} mb='10px'>
                <Box bgColor={progress === 2 && 'blue.200'} color={progress === 2 ? 'blue.900' : 'white'}
                    w='25px' h='25px' border='1px solid white' borderRadius='500px' textAlign='center' fontSize='14px'>
                    <Text>2</Text>
                </Box>

                <Flex direction='column'>
                    <Heading textTransform='uppercase' fontSize='10px' color={'gray.400'} >Step 2</Heading>
                    <Text textTransform='uppercase' fontSize='12px' color='white'>Select Plan</Text>
                </Flex>
            </Flex>

            <Flex justifyContent='flex-start' alignItems='center' gap={4} mb='10px'>
                <Box bgColor={progress === 3 && 'blue.200'} color={progress === 3 ? 'blue.900' : 'white'}
                    w='25px' h='25px' border='1px solid white' borderRadius='500px' textAlign='center' fontSize='14px'>
                    <Text>3</Text>
                </Box>

                <Flex direction='column'>
                    <Heading textTransform='uppercase' fontSize='10px' color={'gray.400'} >Step 3</Heading>
                    <Text textTransform='uppercase' fontSize='12px' color='white'>Add-Ons</Text>
                </Flex>
            </Flex>

            <Flex justifyContent='flex-start' alignItems='center' gap={4} mb='10px'>
                <Box bgColor={progress === 4 && 'blue.200'} color={progress === 4 ? 'blue.900' : 'white'}
                    w='25px' h='25px' border='1px solid white' borderRadius='500px' textAlign='center' fontSize='14px'>
                    <Text>4</Text>
                </Box>

                <Flex direction='column'>
                    <Heading textTransform='uppercase' fontSize='10px' color={'gray.400'} >Step 4</Heading>
                    <Text textTransform='uppercase' fontSize='12px' color='white'>Summary</Text>
                </Flex>
            </Flex>
        </Stack>
    )
}

export default ProgressBar