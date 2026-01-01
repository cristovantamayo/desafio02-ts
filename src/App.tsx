import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { Card } from "./components/Card";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ChakraProvider>
      <Layout>
        <Card />
        <div>
          <h1>Counter: {value}</h1>
          <button
            style={{
              padding: "10px",
              border: "1px solid black",
              marginRight: "10px",
            }}
            onClick={() => setValue(value + 1)}
          >
            Increment
          </button>
          <button
            style={{
              padding: "10px",
              border: "1px solid black",
              marginRight: "10px",
            }}
            onClick={() => setValue(value - 1)}
          >
            Decrement
          </button>
        </div>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
