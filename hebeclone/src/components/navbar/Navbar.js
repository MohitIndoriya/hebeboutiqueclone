import React from 'react';
import "./Navbar.css";
import TypewriterComponent from "typewriter-effect";
import PersonIcon from '@mui/icons-material/Person';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import { Icon } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,Input,useDisclosure
} from '@chakra-ui/react'
import { Cart } from '../cart/cart';

const Navbar1 = () => {

  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <div className="parent">
<div style={{ fontSize:"50px",marginLeft:"30px",color:"#fff",width:"10%",cursor:"pointer"}}>
                            <TypewriterComponent
                                options={{
                                    strings: ["hebe."],
                                    loop: true,
                                    autoStart: true,
                                    typeSpeed:10,
                                    fontSize: '200px'
                                }}
                            />  
      </div>
      <div className='menu'>
        
        <div><a href="#">SHOP</a></div>
        <div><a href="#">BRANDS</a></div>
        <div><a href="#">MY BOYFRIENDS BACK</a></div>
        <div><a href="#">STAFF EDIT</a></div>
        
      </div>
      <div className='links'>
        <Icon as={PersonIcon} />
        <Icon as={SearchSharpIcon} />
       <Cart />
      </div>
    </div>
  )
}

export default Navbar1