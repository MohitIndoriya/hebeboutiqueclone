import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function HoverCart() {
  let productArray = [
    {
      id: 1,
      title: "Six Piece Band Ring",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/38A48FA9-3301-474E-B314-710628A4C6CC_750x.jpeg.jpg?v=1571709542",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 2,
      title: "Snake Band Skinny",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/B78CA27C-1144-49BA-8554-4592FD2ECB81_750x.jpeg.jpg?v=1571709542",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 3,
      title: "Dusted Heart Shield Ring",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/61064061-3E99-4C63-962C-C8DE87B05DCE_750x.jpg?v=1639440995",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 4,
      title: "Flashy Necklace // Sterling Silver",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/image_aafe4a0e-9784-499f-a660-bd59cf296ebb_750x.jpg?v=1571709519",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
  ];
  // const style = {
  //   textAlign: "center",
  //   justifyContent: "center",
  //   height: "500px",
  //   width: "500px",
  //   background: "red",
  //   margin: "100px auto",
  // };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <div>
        <>
          <Button ref={btnRef} key={"sm"} colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                {productArray.map((el, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        marginBottom: "10px",
                      }}
                      key={index}
                    >
                      <img
                        src={el.image}
                        alt={index}
                        style={{ height: "100px", width: "100px" }}
                      />
                      <div>
                        <p>{el.title}</p>
                        <p>{el.price}</p>
                      </div>
                    </div>
                  );
                })}
                <h1>Hello</h1>
                <h1>Hello</h1>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>{" "}
        </>
      </div>
    </div>
  );
}
export default HoverCart;
