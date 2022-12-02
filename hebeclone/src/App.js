import Product from "./components/Product Page/Product";
import { useContext } from "react";
import ProductContext from "./components/ProductContextAPI/ProductContextAPI";
// import HoverCart from "./components/HoverCart/HoverCart";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  const data = useContext(ProductContext);
  return (
    <ChakraProvider>
      <div className="App">
        {" "}
        <ProductContext.Provider value={data}>
          <Product />
        </ProductContext.Provider>
        {/* <HoverCart /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
