import { useState } from 'react'

import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button, Switch, Spacer, ButtonGroup } from '@chakra-ui/react'

import arcadeIcon from '../images/icon-arcade.svg'
import advancedIcon from '../images/icon-advanced.svg'
import proIcon from '../images/icon-pro.svg'


const PlanMonth = () => {

    const [selectPlan, setSelectPlan] = useState('arcade')


    return (
        <Flex mb='25px' justifyContent='space-between'>

            <Flex w='100px' border={selectPlan === 'arcade' ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                backgroundColor={selectPlan === 'arcade' && 'bgcomponent.50'}
                borderRadius='5px' p='10px' flexDirection='column' justifyContent='flex-start'
                alignItems='flex-start' cursor='pointer'
                onClick={() => setSelectPlan('arcade')}
            >
                <Image src={arcadeIcon} h='28px' mb='30px' />
                <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Arcade</Text>
                <Text fontSize='11px' color={'gray.400'}>$9/mo</Text>
            </Flex>

            <Flex w='100px' border={selectPlan === 'advanced' ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                backgroundColor={selectPlan === 'advanced' && 'bgcomponent.50'}
                borderRadius='5px' p='10px' flexDirection='column' justifyContent='flex-start'
                alignItems='flex-start' cursor='pointer'
                onClick={() => setSelectPlan('advanced')}
            >
                <Image src={advancedIcon} h='28px' mb='30px' />
                <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Advanced</Text>
                <Text fontSize='11px' color={'gray.400'}>$12/mo</Text>
            </Flex>

            <Flex w='100px' border={selectPlan === 'pro' ? '1px solid #553C9A' : '1px solid #CBD5E0'}
                backgroundColor={selectPlan === 'pro' && 'bgcomponent.50'}
                borderRadius='5px' p='10px' flexDirection='column' justifyContent='flex-start'
                alignItems='flex-start' cursor='pointer'
                onClick={() => setSelectPlan('pro')}
            >
                <Image src={proIcon} h='28px' mb='30px' />
                <Text as='h2' fontSize='12px' color={'blue.700'} fontWeight='bold'>Pro</Text>
                <Text fontSize='11px' color={'gray.400'}>$15/mo</Text>
            </Flex>

        </Flex>
    )
}

export default PlanMonth