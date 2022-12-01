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
            <div style={{}}>$ {productArray[0].price + "  "}</div>
            <div style={{ fontSize: "15px" }}>
              <span>
                {" "}
                or 6 weekly interest-free payments from $13.32 with Laybuy
              </span>
              <img
                src="https://www.laybuy.com/assets/laybuy-logo-small.svg"
                alt="discount?"
              />
            </div>
          </div>
          <div style={{ fontSize: "15px" }}>
            or ${productArray[0].rating.rate} interest-free payment of $ $
            {productArray[0].rating.count % 7}` with{" "}
            <img
              src="https://lh3.googleusercontent.com/Ils-JetceWgPi6om3f1_uXMZdEr3PcMvSH0UAoqhY8ASc8NjqlGmbS9ozuEgbXezsMVqKgiHVtcNNLcWDSm-J8yEACGR0t15FoNiIoNMiEqNEPXtBMWptn0f2E6bOA3LaB5a2_wXVb1PwpoPwtN9QARL_ith3XyGtxxhSXFCuAUwLMdDJVZemAMnoajgaXYRM0i_1IpPQTSd9d7MkUbOX39gaiy3vo0YvlmyI1fB7Mw1A-Ba_R9QoOLAHCDrD0K61kT8mfJ9LlKIpFvbPPMoomGIS3YzgeiIiOK5DxNct9OarMCs1MJRzYXNaPx4chETFQbofhjhBnAaKu5hhWG1PRDFk_ihNXMrBGLJM0NKDN1K5ksO8dDEmqGeXoT50BWAw76u_TKxPCe9WYK0vlYRLAUafxprU7ekuQoSl9YDJg-OlEzFKSOkt5kTbCaa2qSnJm8I0HsyKYjGiN_QFovDIHUdpwEKgWah4Fj_B21jOapfy1I5AZooxxx0C8ElrCPtGqygflUYQAzTF8n5vBT8wLDnTjifX36fbOH3GDezp4Ct3FOBGdCEkzBR8MxAG9K61cDHna2iI_qjfuFpJS0LAbELktFs2gMX-GOmg7_kCGUphdcurhEVJt2KdkbmfMU3SZX9u6sY5wtugXQmSUCkCjcUkFh4We8S0SzBAB8Bu0SNmN7O5zG4aCmNnr4LpqdW2FGrJkXYyybPkX9fkkHtJO_KEAhuG5PyEGy0pxlOtr6WM5yzNj78K5v6SeH6HoJp1rCYpO6B2TSfEXEsk2p_nEG_xk9P_tdIHMNcJDYOelIt0GjDgjdYTvnAjEoWqkFf8WjUFjmBIa0JWJRK0E29L86B_hbVt_t6Aefhz8bY7Nyu2AvGjF4Iwp7YlacPBIEMVGS78_fdRUInAWljIicrsy1xBVNwqhfJ53H2uUn3-paX4hZ7PgxMiwomBTkd39BaL_qICjIAMApWIYpa-A=w86-h21-no?authuser=0"
              alt="afterPay"
            />
          </div>
          <div style={{ fontSize: "17px" }}>Tax Included</div>
          <div style={{ fontSize: "18px" }}>
            {productArray[0].rating.count} in Stock
          </div>
          <div>
            <p>Size</p>
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
          <button id="addToCart">Add to cart</button>
          <button id="buyBtn">
            Buy with{" "}
            <img
              src="https://lh3.googleusercontent.com/EMx7dMompISutTyNToZ5jZasrO-q4dEkyu-UKbBe_BajHOjXGO2KNDQAGnkbBef5ZpF40jTLfxvzyXMevrB9061GNHwYPBQAD9j2Riqpey0RtsT-c1ori-WYfy7Qfn4AWBs_lMHKmGyrc7M8RSTG7Yj4RAXF5zF6h0As7N1ZgVbg6a07NKF4Ynv8BYAcUV0NoMhBeG6Fa5cAC8vubf5Euo9jFYf8E60en_X7Rbt5HFNoa3FQTuUS5vFlS7yuDMMEwPyjPEQrnJ3qlW6Mz4L-ICgJV5tn_iPaWf-G00XH9EdpLvyRqlXzrzg8n5MpkanGka0mAFKIJZ5JaACPFciB17fHWFnmgdTbgAqBBYsphT9Zv54GAGUFFTiQVorEIvUwoptIAMuo2k4U1UiN-QR7_edj2GP_YFrx0HPPiIC5HaEEwzSu_2fMyr3G4Bh16bEr9eSRHu6uaN6U3fTjmcIDfRa5aWEaDVkM7M9Ab4gpoTTW-ldFWX5cMib-tupDw2Jggn1sU-BcPOjqGJuf2BQXAZzhRMYdfGYY0TWFGb0vWe-tfVQy94jqa5RHAhtLMFfj7RGx3KyBWWbDhxbH5pQidg98Zg22tDO2fllXCz-ePqcnIknrpFdJIi4rWrGp6JiSwL_5qLDYeJRB90uQgcNtbK4_Ehr37ZNcYMy3GvKrtcaFPKZexiwdOcLtxFzGFU258XJ7yDS8OGxhI32ugfVR1h_7C211QD7LTbHXbf_iLOdhIFBcLA2iNGqL-hKwHdF8-N4T1qOltyMSpzSV_x31VXfaLRAmUQJphwOhDNIuY-2lH9Iv7DhSw0tkrce03Xf_khJ5NgcRQkhopRmVixL6KaIlS12Doc1RpFVh3r5wc26UWtvAWqOT5fvc3N3RPDQqAbqzMGoTJ-pQxtfZeuUU4ebZFt7Yxh_MGXHgCg0OBf9xzxf-da0A8R__JfyeyumSZT2KodpSfGPTj1lSvA=w67-h21-no?authuser=0"
              alt="Shoppay"
            />{" "}
          </button>
          <div
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <a
              href="/Product.js"
              style={{
                textAlign: "center",
                marginBottom: "60px",
                textDecoration: "none",
              }}
            >
              More payment options
            </a>
          </div>
          <div
            style={{
              border: "2px solid teal",
              height: "300px",
              width: "500px",
            }}
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
