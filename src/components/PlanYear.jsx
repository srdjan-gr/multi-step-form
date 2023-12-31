import { useState } from 'react'
import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button, Switch, Spacer, ButtonGroup } from '@chakra-ui/react'

import arcadeIcon from '../images/icon-arcade.svg'
import advancedIcon from '../images/icon-advanced.svg'
import proIcon from '../images/icon-pro.svg'


const PlanYear = () => {

    const [selectPlan, setSelectPlan] = useState('arcadeyr')


    return (
        <Flex mb='25px' justifyContent='space-between'>

            <Flex w='100px' border={selectPlan === 'arcadeyr' ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                backgroundColor={selectPlan === 'arcadeyr' && 'bgcomponent.50'}
                borderRadius='5px' p='10px' flexDirection='column' justifyContent='flex-start'
                alignItems='flex-start' cursor='pointer'
                onClick={() => setSelectPlan('arcadeyr')}
            >
                <Image src={arcadeIcon} h='28px' mb='30px' />
                <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Arcade</Text>
                <Text fontSize='11px' color={'gray.400'}>$90/yr</Text>
                <Text fontSize='10px' color={'blue.700'}>2 months free</Text>
            </Flex>

            <Flex w='100px' border={selectPlan === 'advancedyr' ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                backgroundColor={selectPlan === 'advancedyr' && 'bgcomponent.50'}
                borderRadius='5px' p='10px' flexDirection='column' justifyContent='flex-start'
                alignItems='flex-start' cursor='pointer'
                onClick={() => setSelectPlan('advancedyr')}
            >
                <Image src={advancedIcon} h='28px' mb='30px' />
                <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Advanced</Text>
                <Text fontSize='11px' color={'gray.400'}>$120/yr</Text>
                <Text fontSize='10px' color={'blue.700'}>2 months free</Text>
            </Flex>

            <Flex w='100px' border={selectPlan === 'proyr' ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                backgroundColor={selectPlan === 'pryro' && 'bgcomponent.50'}
                borderRadius='5px' p='10px' flexDirection='column' justifyContent='flex-start'
                alignItems='flex-start' cursor='pointer'
                onClick={() => setSelectPlan('proyr')}
            >
                <Image src={proIcon} h='28px' mb='30px' />
                <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Pro</Text>
                <Text fontSize='11px' color={'gray.400'}>$150/yr</Text>
                <Text fontSize='10px' color={'blue.700'}>2 months free</Text>
            </Flex>

        </Flex>
    )
}

export default PlanYear