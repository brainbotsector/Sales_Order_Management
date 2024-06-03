import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, ColorModeProvider, CSSReset, Box, useColorMode, IconButton } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Login from './Login';
import Orders from './Orders';

const App = () => {
  return (
    <ChakraProvider>
      <ColorModeProvider options={{ initialColorMode: 'light', useSystemColorMode: true }}>
        <CSSReset />
        <ColorModeScript initialColorMode="light" />
        <Box textAlign="center" fontSize="xl">
          <ToggleButton  />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

const ToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Dark Mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      position="fixed"
      top={4}
      right={4}
    />
  );
};

export default App;

