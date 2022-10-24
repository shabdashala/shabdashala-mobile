import { NativeBaseProvider, Text, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Hellow World!</Text>
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
