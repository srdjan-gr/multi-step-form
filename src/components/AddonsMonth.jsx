import React, { useState } from 'react'
import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button, Switch, Spacer, ButtonGroup, Checkbox } from '@chakra-ui/react'

const AddonsMonth = () => {

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
    )
}

export default AddonsMonth