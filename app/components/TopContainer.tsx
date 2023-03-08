import { Box, Button, color, Container, Heading, HStack, Image, Text } from '@chakra-ui/react'

import React from 'react'




export default function TopContainer(){
  return (<>
  <Container maxWidth="100%">

  <Box bgImage={"./background-image.gif"} w="1808" h="600" >
    <HStack>

    <Box py={'32' } px={"28"} lineHeight="7" w="60%">

    <Heading pb={"2.5"} fontSize="7xl" color={"#4B0082"}>Build your next idea <br /><span id="color"> even faster</span></Heading>
      <Text color="gray.900" pt="5" display={{lg:'flex', base:"none"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
     Necessitatibu
      suscipit molestiae deserunt temporibus.<br /> 
      Earum deleniti quo nobis laborum quaerat, numquam.<br /> praesentium quisquam, 
      veniam minima reprehenderit .</Text>

      <Button colorScheme="blackAlpha" variant="solid" my="5" textColor="white">Join now</Button>
      <Button colorScheme="blackAlpha" variant="outline" my="5" textColor="indigo" mx="5"> view syllabus</Button>

    </Box>

    <Box w="40%">
      <Image src="./home-avatar.png" alt="this is animated pic" pt="9" w="175" h="525" ></Image>
    </Box>

    </HStack>

  </Box>
  </Container>
  
  </>
  )
  
  
}


