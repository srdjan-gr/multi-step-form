import { useState } from 'react'
import { Card, Flex, Image } from '@chakra-ui/react'

import sidebarImg from './images/bg-sidebar-desktop.svg'
import ProgressBar from './components/ProgressBar'
import PersonalInfo from './components/PersonalInfo'
import PlanInfo from './components/PlanInfo'


const App = () => {

  const [progress, setProgress] = useState('plan')
  const [stage, setStage] = useState()


  const renderOptions = () => {
    if (progress === 'personal') {
      return (
        <PersonalInfo progress={progress} setProgress={setProgress} />
      )
    } else if (progress === 'plan') {
      return (
        <PlanInfo progress={progress} setProgress={setProgress} />
      )
    }
  }



  return (
    <Flex justifyContent='center' alignItems='center' h='100vh' bgColor={'blue.50'}>

      <Card
        direction={{ base: 'column', sm: 'row' }} overflow='hidden'
        variant='outline' bgColor={'whiteAlpha.900'}
        p='15px' border='none'
        boxShadow='lg' borderRadius='10px'
      >
        <Image mr='50px' h='450px' src={sidebarImg} />

        <ProgressBar progress={progress} />

        {renderOptions()}

      </Card>
    </Flex>
  )
}

export default App
