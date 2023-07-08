import React, { useState } from 'react'
import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button, Switch, Spacer, ButtonGroup, Checkbox } from '@chakra-ui/react'
import AddonsMonth from './AddonsMonth'
import AddonsYear from './AddonsYear'



const AddonsInfo = ({ progress, setProgress }) => {

    // Ovo treba da bude u globalnom stanju za JSON
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

                        <AddonsMonth />

                    </Box>


                    <ButtonGroup alignItems='center' spacing='auto'>
                        <Button colorScheme="button" color={'gray.400'} fontWeight='medium' fontSize='14px' variant='link' onClick={() => setProgress('plan')}>Go Back</Button>

                        <Button colorScheme="button" color='white' fontSize='12px' onClick={() => setProgress('summary')}>Next Step</Button>
                    </ButtonGroup>
                </Flex>

            </CardBody>
        </Stack>
    )
}

export default AddonsInfo