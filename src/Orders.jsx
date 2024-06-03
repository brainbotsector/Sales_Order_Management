import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Spacer,
  Icon,
} from '@chakra-ui/react';

import { FaUser } from 'react-icons/fa';
import SaleOrderModal from './components/SaleOrderModal';
import EditOrderModal from './components/EditOrderModal';

const Orders = () => {
  const [isSaleOrderModalOpen, setSaleOrderModalOpen] = React.useState(false);
  const [isEditOrderModalOpen, setEditOrderModalOpen] = React.useState(false);
  const [editOrderData, setEditOrderData] = React.useState(null);


  const handleEditOrder = (order) => {
    setEditOrderData(order);
    setEditOrderModalOpen(true);
  };

  const activeOrders = [
    { id: 1, customerName: 'Ram', price: '₹ 100', lastModified: '2024-06-02 (11.07 AM)' },
    { id: 2, customerName: 'Shyam', price: '₹ 210', lastModified: '2024-06-01 (11.30 AM)' },
  ];

  const completedOrders = [
    { id: 3, customerName: 'Shree Ganesha', price: '₹ 300', lastModified: '2024-06-02 (12.00 AM)' },
  ];

  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
      </Flex>

      <Tabs variant="soft-rounded" colorScheme="green" mt={100}>
        <TabList>
          <Tab fontSize="lg" fontWeight="bold">Active Sale Orders</Tab>
          <Tab fontSize="lg" fontWeight="bold">Completed Sale Orders</Tab>
          <Spacer />
          <Button   mr={40} onClick={() => setSaleOrderModalOpen(true)} colorScheme="teal">
            + Sale Order
          </Button>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th fontSize="lg" fontWeight="bold">ID</Th>
                  <Th fontSize="lg" fontWeight="bold">Customer Name</Th>
                  <Th fontSize="lg" fontWeight="bold">Price(₹)</Th>
                  <Th fontSize="lg" fontWeight="bold">Last Modified</Th>
                  <Th fontSize="lg" fontWeight="bold">Edit</Th>
                </Tr>
              </Thead>
              <Tbody fontSize="sm">
                {activeOrders.map((order) => (
                  <Tr key={order.id}>
                    <Td>{order.id}</Td>
                    <Td>
                      <Icon as={FaUser} mr={4} />
                      {order.customerName}
                    </Td>
                    <Td>{order.price}</Td>
                    <Td>{order.lastModified}</Td>
                    <Td>
                      <Button onClick={() => handleEditOrder(order)}>•••</Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th fontSize="lg" fontWeight="bold">ID</Th>
                  <Th fontSize="lg" fontWeight="bold">Customer Name</Th>
                  <Th fontSize="lg" fontWeight="bold">Price(₹)</Th>
                  <Th fontSize="lg" fontWeight="bold">Last Modified</Th>
                </Tr>
              </Thead>
              <Tbody fontSize="sm">
                {completedOrders.map((order) => (
                  <Tr key={order.id}>
                    <Td>{order.id}</Td>
                    <Td>
                      <Icon as={FaUser} mr={4} />
                      {order.customerName}
                    </Td>
                    <Td>{order.price}</Td>
                    <Td>{order.lastModified}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <SaleOrderModal
        isOpen={isSaleOrderModalOpen}
        onClose={() => setSaleOrderModalOpen(false)}
      />
      <EditOrderModal
        isOpen={isEditOrderModalOpen}
        onClose={() => setEditOrderModalOpen(false)}
        order={editOrderData}
      />
    </Box>
  );
};

export default Orders;
