import React from 'react'
import {Box,Input,Heading,Container,Button} from "@chakra-ui/react"

export default function Signup() {
  return (
    <Box bg="#caafa8">
    <Container>
    <Box bg="#caafa8" w='100%' p={4} color='white' width="100%" height="800px"  paddingTop="100px"  >
        <Heading as="h1" size="2xl" fontFamily="chloeregular">Create Account</Heading>
        <Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="60px" >First Name</Heading>
    <Input variant='flushed'  />
    <Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="30px" >Last Name</Heading>
    <Input variant='flushed'  />
        <Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="30px" >Email</Heading>
    <Input variant='flushed'  />
    <Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="20px" >Password</Heading>
    <Input variant='flushed'  />
    <Button colorScheme='black' textColor="#caafa8" variant='ghost' width="100%" bg="white" marginTop="50px" borderRadius="0px">
    Create
  </Button>
 
  </Box>
  </Container>
  </Box>
  )
}
