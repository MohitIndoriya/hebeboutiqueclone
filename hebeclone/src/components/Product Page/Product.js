import React, { useContext } from "react";
import "./Product.css";
import productContext from "../ProductContextAPI/ProductContextAPI";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

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

  let data = useContext(productContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="container">
      <div id="top">
        <div id="topLeft">
          {
            <img
              src={data.image}
              alt="pic"
              height="750"
              width="540"
              margin="auto"
            />
          }
        </div>
        <div id="topRight">
          <div>{data.category}</div>
          <h1>{data.title}</h1>
          <div>
            <div style={{}}>$ {data.price + "  "}</div>
            <div style={{ fontSize: "15px", display: "flex" }}>
              <span>
                or 6 weekly interest-free payments from $13.32 with Laybuy
              </span>
              <img
                src="https://www.laybuy.com/assets/laybuy-logo-small.svg"
                alt="discount?"
              />
            </div>
          </div>
          <div style={{ fontSize: "15px", display: "flex" }}>
            or ${data.rating.rate} interest-free payment of $ $
            {data.rating.count % 7}` with
            <img
              style={{ height: "20px", width: "50px", marginLeft: "10px" }}
              src="https://mma.prnewswire.com/media/1224081/Afterpay_Mint_Logo.jpg?p=twitter"
              alt="afterPay"
            />
          </div>
          <div style={{ fontSize: "17px" }}>Tax Included</div>
          <div style={{ fontSize: "18px" }}>{data.rating.count} in Stock</div>
          <div>
            <p>Size</p>
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
          <button ref={btnRef} onClick={onOpen} id="addToCart">
            Add to cart
          </button>
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
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <button id="buyBtn">
            Buy with{" "}
            <img
              style={{ height: "30px", width: "60px", marginLeft: "10px" }}
              src="data:image/png;base64,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"
              alt="afterPay"
            />
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
              width: "500px",
            }}
          >
            <Tabs>
              <TabList>
                <Tab>Description</Tab>
                <Tab>Shipping</Tab>
                <Tab>Returns</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>{data.description}</p>
                </TabPanel>
                <TabPanel>
                  <h3>CLICK & COLLECT</h3>
                  <p>
                    For all online orders we offer the option to ‘pick up
                    instore’ which means you can whip in and pick up your
                    parcel. Your purchase will be packaged up, ready to go.
                  </p>

                  <p>
                    If you’re not able to get out of the house but are local, we
                    are happy to deliver your item to your door. There is a
                    charge of just $3 and delivery takes place after shop hours
                    (5pm-7pm). Delivery applies to Masterton and Carterton.
                  </p>
                  <h3>SHIPPING COSTS</h3>
                  <p>
                    Hebe Boutique is aligned with GoSweetSpot who ensure you get
                    the safest, most efficient shipping possible including
                    Saturday and overnight delivery. The majority of couriers we
                    use deliver overnight nationwide, yay!
                  </p>

                  <p>
                    All customers with an online transaction total over $200 get
                    FREE shipping!
                  </p>

                  <p>
                    We charge a flat rate of $6 per package (based on mean
                    calculations) for any purchase of clothing- this is
                    regardless of whether it is overnight, Saturday or rural.
                    FYI rural parcels can be around $15, so our aim is to make
                    it reasonable for all.
                  </p>

                  <p>
                    A charge of $4.00 applies for any purchase of jewellery or
                    an accessory (sunglasses, watches etc.)
                  </p>

                  <h3>Shipping to Australia</h3>
                  <p>
                    $10 shipping fee applies 5-15 working days (excluding Public
                    Holidays) untracked. If you would like a tracking quote,
                    email us.
                  </p>

                  <h3>International</h3>
                  <p>$20 shipping fee applies.</p>
                  <p>
                    5-15 working days untracked. If you would like a tracking
                    quote, email us.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    Worried an item you bought online won’t be right? Don’t
                    stress, we want to make it easy! Follow the conditions below
                    and you can return your item to us for an exchange or
                    refund. Email us at hellothere@hebeboutique.com or call us
                    on +64 (6) 378 8924 to notify us that you’re returning
                    something.
                  </p>
                  <p>
                    You must return the item within 7 working days (Nationwide)
                    and 10 days (International) from receiving it. We recommend
                    tracking your return so there’s no risk of it going missing.
                    We won't be able to process your return if we don't receive
                    it.
                  </p>
                  <p>
                    You know the drill- all tags attached, include your receipt
                    and contact details, and the item must be in brand new,
                    unworn condition.
                  </p>
                  <p>
                    If a refund is issued, you will be refunded via your
                    original payment method- or to a nominated bank account once
                    your return is approved.
                  </p>
                  <p>
                    The shipping aspects of your order are non-refunable. Return
                    courier fees are also at the expense of the customer.
                  </p>
                  <p>
                    Due to hygiene reasons we cannot accept returns for change
                    of mind on jewellery, lingerie or eyewear- these terms are
                    also forwarded to us by the supplier and we are unable to
                    return these items to them unless faulty.
                  </p>
                  <p>
                    Sale items are not eligible for return, all sale
                    transactions are final and cannot be accepted.
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
      <div id="bottom">
        <div id="topBottom">You may also like</div>
        <div id="downBottom">downBottom</div>
      </div>
    </div>
  );
}
