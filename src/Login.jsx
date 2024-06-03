import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, useColorMode, Alert, AlertIcon } from '@chakra-ui/react';

const Login = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Dummy authentication
    if (username === 'admin' && password === 'admin1234') {
      navigate('/orders');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Box
      p={4}
      maxWidth="400px"
      mx="auto"
      mt="100px"
      backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.700'}
      borderRadius="lg"
    >
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      {error && (
        <Alert status="error" mt={4} borderRadius="md">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <Button mt={4} colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;

