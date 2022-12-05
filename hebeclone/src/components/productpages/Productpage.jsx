import { Box, Card, CardBody, Heading, Image, Stack, Text ,Button,Divider, CardFooter,ButtonGroup} from "@chakra-ui/react"
import axios from "axios"
import React from 'react'
import { useState } from "react"
import { useEffect } from "react"

export default function Productpage() {
    let [arr,setarr]=useState([])
    let category="jackets"
    const data=async()=>{
       
       
       let  products=await axios.get(`http://localhost:8080/products?category=${category}`)
       console.log(products.data);
     setarr(products.data)
       
    }
useEffect(()=>{
    data()
},[])
console.log(arr);
   
   
  return (
    <Box display="grid" gridTemplateColumns="repeat(3,1fr)">{

        arr.map((e)=>{
            return <Card maxW='sm'>
            <CardBody>
              <Image
                src={e.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{e.title}</Heading>
                <Text>
                 {e.desciption}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${e.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent="center">
              <ButtonGroup spacing='2'>
               
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        })
        }</Box>
  )
     
  
}
