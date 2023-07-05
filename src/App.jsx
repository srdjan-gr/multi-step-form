import { useState } from 'react'

import { Box, Card, CardBody, Flex, Image, Stack, Input, Heading, Text, FormControl, FormLabel, FormErrorMessage, Button } from '@chakra-ui/react'

import sidebarImg from './images/bg-sidebar-desktop.svg'
import ProgressBar from './components/ProgressBar'
import PersonalInfo from './components/PersonalInfo'


const App = () => {

  const [progress, setProgress] = useState(1)
  const [stage, setStage] = useState()
  

  const nextForm = () => {
    setProgress(progress + 1)

    if (progress === 4) {
      setProgress(progress)
    }
  }



  return (
    <Flex justifyContent='center' alignItems='center' h='100vh' bgColor={'blue.50'}>

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        bgColor={'whiteAlpha.900'}
        p='15px'
        border='none'
        boxShadow='lg'
        borderRadius='10px'
      >

        <Image mr='60px' h='480px' src={sidebarImg} />

        <ProgressBar progress={progress} />

        <PersonalInfo progress={progress} nextForm={nextForm} />

      </Card>
    </Flex>
  )
}

export default App
