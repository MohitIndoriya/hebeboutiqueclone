// import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import "./Product.css";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function Product() {
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
  return (
    <div className="container">
      <div id="top">
        <div id="topLeft">
          {/* <h2>Product Detail Page</h2> */}
          {
            <img
              src={productArray[3].image}
              alt="pic"
              height="750"
              width="540"
              // paddingTop="400px"
              margin="auto"
              // borderRadius="10px"
            />
          }
        </div>
        <div id="topRight">
          <div>{productArray[0].category}</div>
          <h1>{productArray[0].title}</h1>
          <div>
            <span style={{}}>${productArray[0].price + "  "}</span>
            <br />
            <span>
              or 6 weekly interest-free payments from $13.32 with Laybuy
            </span>
          </div>
          <div>
            or ${productArray[0].rating.rate} interest-free payment of $ $
            {productArray[0].rating.count % 7}` with <span>afterPay</span>
          </div>
          <div>Tax Included</div>
          <div>{productArray[0].rating.count} in Stock</div>
          <div>
            <p>Size</p>
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
          <button id="addToCart">Add to cart</button>
          <button id="buyBtn">Buy with </button>
          <a href="/Product.js">More payment options</a>
          <div
            style={{ border: "2px solid teal", height: "300", width: "500" }}
          ></div>
        </div>
      </div>
      <div id="bottom">
        <div id="topBottom">You may also like</div>
        <div id="downBottom">downBottom</div>
      </div>
    </div>
    // <View>
    //   <Text>Product</Text>
    // </View>
  );
}

// const styles = StyleSheet.create({})
