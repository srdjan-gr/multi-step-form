import React, { useState } from 'react'
import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button, Switch, Spacer, ButtonGroup, Checkbox } from '@chakra-ui/react'



const AddonsInfo = ({ progress, setProgress }) => {

    const [selectedAddon, setselectedAddon] = useState({
        service: '',
        storage: '',
        theme: '',
    })


    const [isCheckedService, setIsCheckedService] = useState(true)
    const [isCheckedStorage, setIsCheckedStorage] = useState(false)
    const [isCheckedTheme, setIsCheckedTheme] = useState(false)


    const checkHandlerService = () => {
        setIsCheckedService(!isCheckedService)
    }
    const checkCheckedStorage = () => {
        setIsCheckedStorage(!isCheckedStorage)
    }
    const checkCheckedTheme = () => {
        setIsCheckedTheme(!isCheckedTheme)
    }


    return (
        <Stack >
            <CardBody w='380px' mr='35px'>

                <Flex as='section' flexDirection='column' justifyContent='space-between' height='full'>
                    <Box>
                        <Heading as='h1' size='lg' color={'blue.900'}>Pick add-ons</Heading>
                        <Text fontSize='sm' mb={8} color={'gray.400'}>Add-ons help enhance your gaming expirience.</Text>

                        <Flex direction='column'>

                            <Flex border={isCheckedService ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                                borderRadius='5px' px='16px' py='10px' mb='10px' w='full' alignItems='center'>
                                <Checkbox defaultChecked checked={isCheckedService} onChange={checkHandlerService}></Checkbox>
                                <Flex direction='column' pl={4}>
                                    <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Online service</Text>
                                    <Text fontSize='11px' color={'gray.400'}>Access to multiplayer games</Text>
                                </Flex>
                                <Text fontSize='11px' color={'blue.600'} ml='auto'>$1/mo</Text>
                            </Flex>

                            <Flex border={isCheckedStorage ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                                borderRadius='5px' px='16px' py='10px' mb='10px' w='full' alignItems='center'>
                                <Checkbox checked={isCheckedService} onChange={checkCheckedStorage}></Checkbox>
                                <Flex direction='column' pl={4}>
                                    <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Larger storage</Text>
                                    <Text fontSize='11px' color={'gray.400'}>Extra 1TB of cloud save</Text>
                                </Flex>
                                <Text fontSize='11px' color={'blue.600'} ml='auto'>$2/mo</Text>
                            </Flex>

                            <Flex border={isCheckedTheme ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                                borderRadius='5px' px='16px' py='10px' w='full' alignItems='center'>
                                <Checkbox checked={isCheckedTheme} onChange={checkCheckedTheme}></Checkbox>
                                <Flex direction='column' pl={4}>
                                    <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Customizible profile</Text>
                                    <Text fontSize='11px' color={'gray.400'}>Custom theme on your profile</Text>
                                </Flex>
                                <Text fontSize='11px' color={'blue.600'} ml='auto'>$2/mo</Text>
                            </Flex>

                        </Flex>
                    </Box>


                    <ButtonGroup alignItems='center' spacing='auto'>
                        <Button colorScheme="button" color={'gray.400'} fontWeight='medium' fontSize='14px' variant='link' onClick={() => setProgress('plan')}>Go Back</Button>

                        <Button colorScheme="button" color='white' fontSize='12px' onClick={() => setProgress('addons')}>Next Step</Button>
                    </ButtonGroup>
                </Flex>

            </CardBody>
        </Stack>
    )
}

export default AddonsInfo