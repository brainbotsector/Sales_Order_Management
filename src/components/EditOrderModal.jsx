import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from '@chakra-ui/react';
import { MdDateRange } from 'react-icons/md'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditOrderModal = ({ isOpen, onClose, order }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: order || {},
  });

  const onSubmit = (data) => {
    console.log(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.customerName}>
              <FormLabel>Customer Name</FormLabel>
              <Input
                id="customerName"
                defaultValue={order?.customerName}
                {...register('customerName', { required: 'This is required' })}
              />
            </FormControl>
            <FormControl isInvalid={errors.price}>
              <FormLabel mt={4}>Price</FormLabel>
              <Input
                id="price"
                defaultValue={order?.price}
                {...register('price', { required: 'This is required' })}
              />
            </FormControl>
            <FormControl isInvalid={errors.lastModified}>
              <FormLabel mt={4}>Last Modified</FormLabel>
              <Flex align="center">  {/* Adjust layout */}
                <DatePicker 
                  selected={order?.lastModified ? new Date(order.lastModified) : null}
                  onChange={date => console.log(date)}
                  dateFormat="yyyy-MM-dd"
                  style={{ width: '200px' }}
                />
                <MdDateRange style={{ marginLeft: '8px', cursor: 'pointer' }} /> {/* Add calendar icon */}
              </Flex>
            </FormControl>
            <Button mt={9} colorScheme="teal" type="submit">
              Submit
            </Button>
            <Button mt={9} variant="ghost" onClick={onClose}>Cancel</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditOrderModal;
