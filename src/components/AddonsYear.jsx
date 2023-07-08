import React from 'react'

const AddonsYear = () => {
    return (
        <Flex direction='column'>

            <Flex border={isCheckedService ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                borderRadius='5px' px='16px' py='10px' mb='10px' w='full' alignItems='center'>
                <Checkbox defaultChecked checked={isCheckedService} onChange={checkHandlerService}></Checkbox>
                <Flex direction='column' pl={4}>
                    <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Online service</Text>
                    <Text fontSize='11px' color={'gray.400'}>Access to multiplayer games</Text>
                </Flex>
                <Text fontSize='11px' color={'blue.600'} ml='auto'>$10/yr</Text>
            </Flex>

            <Flex border={isCheckedStorage ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                borderRadius='5px' px='16px' py='10px' mb='10px' w='full' alignItems='center'>
                <Checkbox checked={isCheckedService} onChange={checkCheckedStorage}></Checkbox>
                <Flex direction='column' pl={4}>
                    <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Larger storage</Text>
                    <Text fontSize='11px' color={'gray.400'}>Extra 1TB of cloud save</Text>
                </Flex>
                <Text fontSize='11px' color={'blue.600'} ml='auto'>$20/yr</Text>
            </Flex>

            <Flex border={isCheckedTheme ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                borderRadius='5px' px='16px' py='10px' w='full' alignItems='center'>
                <Checkbox checked={isCheckedTheme} onChange={checkCheckedTheme}></Checkbox>
                <Flex direction='column' pl={4}>
                    <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Customizible profile</Text>
                    <Text fontSize='11px' color={'gray.400'}>Custom theme on your profile</Text>
                </Flex>
                <Text fontSize='11px' color={'blue.600'} ml='auto'>$20/yr</Text>
            </Flex>

        </Flex>
    )
}

export default AddonsYear