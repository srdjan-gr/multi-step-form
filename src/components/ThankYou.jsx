import React, { useState } from 'react'
import { CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

import tyhankYouIcon from '../images/icon-thank-you.svg'

const ThankYou = () => {
    return (
        <Stack >
            <CardBody w='380px' mr='35px'>

                <Flex as='section' direction='column' alignItems='center' justifyContent='center' height='full'>

                    <Image src={tyhankYouIcon} h='60px' />
                    <Heading mb='12px' mt='22px' size='lg' color={'blue.900'}>Thank you!</Heading>
                    <Text textAlign='center' fontSize='12px' mb={8} color={'gray.400'}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to emailus at support@loremimg.com.</Text>

                </Flex>

            </CardBody>
        </Stack>
    )
}

export default ThankYou