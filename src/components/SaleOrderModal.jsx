import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';

const SaleOrderModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedProducts, setSelectedProducts] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    onClose();
  };

  const handleProductSelect = (e) => {
    const product = e.target.value;
    if (product && !selectedProducts.includes(product)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleProductRemove = (productToRemove) => {
    setSelectedProducts(selectedProducts.filter(product => product !== productToRemove));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={4}>
              <FormLabel>All Products</FormLabel>
              <Select
                placeholder="Select Product"
                onChange={handleProductSelect}
              >
                <option value="Product 1">Product 1</option>
                <option value="Product 2">Product 2</option>
                <option value="Product 3">Product 3</option>
                <option value="Stocked Product 1">Stocked Product 1</option>
                <option value="Stocked Tea 2">Stocked Tea 2</option>
                <option value="Anonymous Product">Anonymous Product</option>
              </Select>
            </FormControl>

            {selectedProducts.map((product, index) => (
              <Tag
                key={index}
                size="lg"
                borderRadius="full"
                variant="solid"
                colorScheme="blue"
                mb={2}
                mr={2}
              >
                <TagLabel>{product}</TagLabel>
                <TagCloseButton onClick={() => handleProductRemove(product)} />
              </Tag>
            ))}

            <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
              <Flex alignItems="center" justifyContent="space-between">
                <FormLabel mb={2}>SKU 227 (234 Kg)</FormLabel>
                <Box
                  backgroundColor="teal"
                  p={1}
                  borderRadius="md"
                  mb={0}
                  display="inline-block"
                  variant="soft-rounded" 
                >
                  Rate: $324
                </Box>
              </Flex>
              <Flex>
                <FormControl isInvalid={errors.sellingRate1} mr={4}>
                  <FormLabel>Selling Rate</FormLabel>
                  <Input
                    placeholder="Selling Rate"
                    {...register('sellingRate1', { required: 'This is required' })}
                  />
                </FormControl>
                <FormControl isInvalid={errors.totalItems1}>
                  <FormLabel>Total Items</FormLabel>
                  <Input
                    placeholder="Total Items"
                    {...register('totalItems1', { required: 'This is required' })}
                  />
                  <Box
                  p={0}
                  borderRadius="md"
                  mb={0}
                  display="inline-block"
                  mt={4}
                  ml={4}
                >
                  104 Item(s) Remaining
                </Box>
                </FormControl>
              </Flex>
            </Box>

            <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
              <Flex alignItems="center" justifyContent="space-between">
                <FormLabel mb={0}>SKU 220 (224 Kg) </FormLabel>
                <Box
                  backgroundColor="teal"
                  p={1}
                  borderRadius="md"
                  mb={0}
                  display="inline-block"
                >
                  Rate: $324
                </Box>
              </Flex>
              <Flex>
                <FormControl isInvalid={errors.sellingRate2} mr={4}>
                  <FormLabel>Selling Rate</FormLabel>
                  <Input
                    placeholder="Selling Rate"
                    {...register('sellingRate2', { required: 'This is required' })}
                  />
                </FormControl>
                <FormControl isInvalid={errors.totalItems2}>
                  <FormLabel>Total Items</FormLabel>
                  <Input
                    placeholder="Total Items"
                    {...register('totalItems2', { required: 'This is required' })}
                  />
                  <Box
                  p={0}
                  borderRadius="md"
                  mb={0}
                  ml={6}
                  display="inline-block"
                  mt={4}
                >
                  46 Item(s) Remaining
                </Box>
                </FormControl>
              </Flex>
            </Box>
            <Button colorScheme="blue" type="submit" mr={3}>
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;
