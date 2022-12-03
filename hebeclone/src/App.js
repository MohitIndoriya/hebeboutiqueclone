import Product from "./components/Product Page/Product";
import react from "react";
import ProductContext from "./components/ProductContextAPI/ProductContextAPI";
// import SliderProducts from "./components/SliderProducts/SliderProducts";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  const data = react.useContext(ProductContext);
  return (
    <ChakraProvider>
      <div className="App">
        {" "}
        <ProductContext.Provider value={data}>
          <Product />
        </ProductContext.Provider>
        {/* <SliderProducts /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
