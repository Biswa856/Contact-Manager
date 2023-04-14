import { Box, Flex, Stack, Text, color } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

export default function ContactCard({contact,onOpen,getContactId,deleteContact}) {

const updateHandler = (id)=>{
  getContactId(id);
  onOpen();
}

const deleteContacthandler =(id)=>{
  deleteContact(id);

}

  return (
    <Box p="4">
    <Flex bg="teal.400" p="4" borderRadius="xl" justify="space-between" boxShadow="xl" mb="4">
      <Flex align="center">
        <FaUserCircle style={{ height: "50px", width: "50px", marginRight:"10px", color:"white" }} />
        <Stack color="white">
          <Text fontWeight="500">
           {contact.name}
          </Text>
          <Text fontWeight="500">
            {contact.contactNumber}
          </Text>
        </Stack>
      </Flex>
      <Flex align="center" color="white">

        <AiOutlineEdit style={{ height: "30px", width: "30px", marginRight:"5px" }} onClick={()=>updateHandler(contact.id)} />
        <AiOutlineDelete style={{ height: "30px", width: "30px", color:"#f75254" }} onClick={()=>deleteContacthandler(contact.id)}/>
      </Flex>
    </Flex>
  </Box>
  )
}
