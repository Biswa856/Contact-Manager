import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputLeftElement, useDisclosure } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { v4 as uuidy4 } from 'uuid';
import React, { useState } from "react";
import ContactCard from "./component/ContactCard";
import ContactModal from "./component/ContactModal";
import ContactForm from "./component/ContactForm";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()

  const [contacts, setContacts] = useState([])
  const [contactId, setContactId] = useState()
  const[searchData,setsearchData] = useState("")

  const addNewContact = (name, contactNumber) => {

    if (contacts.findIndex((contact) => contact.contactNumber === contactNumber) === -1 && name !== "") {
      setContacts([...contacts, { name, contactNumber, id: uuidy4() }])
    }
  };

  const getContactId = (id) => {
    setContactId(id);
  }


  let selectedContact = contacts.find((contact) => contact.id === contactId)


  const updateContact = (name, contactNumber, id) => {
    setContacts(prev => [...contacts.filter((contact) => contact.id !== id), { name, contactNumber, id }])

  }

  const deleteContact = (id) => {
    setContacts(prev => [...contacts.filter((contact) => contact.id !== id)])

  }

  let searchContacts = contacts.filter((contact) => contact.name.includes(searchData) || contact.contactNumber.includes(searchData))
  return (
    <>
      <ContactModal
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        title={"Add New Contact"}
      >
        <ContactForm
          addNewContact={addNewContact}
          onClose={onClose}
          buttonText={"Add Contact"}
        />
      </ContactModal>
      <ContactModal
        onOpen={onEditOpen}
        isOpen={isEditOpen}
        onClose={onEditClose}
        title={"Edit Contact"}
      >
        <ContactForm
          addNewContact={addNewContact}
          onClose={onEditClose}
          buttonText={"Update Contact"}
          contact={selectedContact}
          updateContact={updateContact}
        />
      </ContactModal>


      <Box>
        <Flex
          p="4"
          justifyContent="center" alignItems="center">
          <Image src="/banner.png" w="150px" h="100px" />
          <Heading as="h1" textTransform="uppercase">Contact Manager</Heading>
        </Flex>

        <Box p="4">
          <Button
            w="full"
            fontSize="xl"
            fontWidth="bold"
            bg="#4FD1C5"
            color="white"
            colorScheme="#4FD1C5"
            onClick={onOpen}
          >
            <BsFillPersonPlusFill style={{ height: "20px", width: "20px", marginRight: "5px" }} />
            Add New Contact</Button>
        </Box>

        <Box p="4">
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<AiOutlineSearch color='gray.300' />}
            />
            <Input type='tel'
             placeholder='Search Contact...' focusBorderColor="teal.300"
             onChange={(e)=>setsearchData(e.target.value)} />
          </InputGroup>
        </Box>
        {searchContacts?.map((contact) => {
          return (
            <ContactCard 
            contact={contact} key={contact?.id} onOpen={onEditOpen} getContactId={getContactId} 
            deleteContact={deleteContact} />
          )
        })}
      </Box>;
    </>
  )
};

export default App;
