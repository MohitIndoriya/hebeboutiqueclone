import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure,Button, Container, Box,Image,Text
  } from '@chakra-ui/react'
  import React  from "react"
  import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcart, HandleQuantiy } from '../../actions/cartAction'
 export  function Cart() {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch=useDispatch()
    let {cart,total}=useSelector((store)=>store.cart)
    useEffect(()=>{
     dispatch(getcart())
     console.log(cart,total,"store")
    },[])
    console.log(cart,total,"store")

    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
    function fun(){
        dispatch(HandleQuantiy({id:2,quantity:5}))

    }
  
    const sizes = [ 'md']
  
    return (
      <>
        {sizes.map((size) => (
          <Button
            onClick={() => handleClick(size)}
            key={size}
            m={4}
          >{`cart`}</Button>
        ))}
  
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{` Cart Items`}</DrawerHeader>
            <DrawerBody>
             <Container>
               { cart.map((el)=>{
                   return(  <Box><Image src={el.image}/><Text>{el.name}</Text>
                   <Text>{el.price}</Text>
                     
                     </Box>   )   
                })}
             </Container>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }