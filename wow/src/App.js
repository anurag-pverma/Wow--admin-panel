import { Box, Flex, HStack } from "@chakra-ui/react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import MainRoutes from "./Routes/MainRoutes";
function App() {
  return (
    <div className="App">
      <Flex
      gap={4}
      >
        <Box backgroundColor="rgb(40,48,70)" color={"white"} height='90vh'>
          <Sidebar />
        </Box>
        <Box >
          <MainRoutes />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
