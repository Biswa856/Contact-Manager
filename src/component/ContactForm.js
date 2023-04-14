import { Button, FormControl, FormLabel, Input, NumberInput, NumberInputField, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function ContactForm({addNewContact, onClose,buttonText,contact,updateContact}) {
    const[name,setName]=useState(contact? contact?.name : "");
    const[contactNumber,setContactNumber] = useState(contact? contact?.contactNumber : "");

    function handleClick(){
if(contact){
  updateContact(name,contactNumber,contact.id) 
  onClose()
}else{

  addNewContact(name,contactNumber)
  onClose()
}

       
    }
  return (
    <Stack>
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input type='text' value={name} focusBorderColor="teal.300" onChange={(e)=>{setName(e.target.value)}} />
    </FormControl>

    <FormControl>
      <FormLabel>Mobile Number</FormLabel>
      {/* <NumberInput focusBorderColor="teal.300">
        <NumberInputField value={contactNumber} onChange={(e)=>{setContactNumber(e.target.value)}} />
      </NumberInput> */}
      <Input type='number' value={contactNumber} onChange={(e)=>{setContactNumber(e.target.value)}} focusBorderColor="teal.300" />
    </FormControl>
    <Button onClick={handleClick} alignSelf="flex-end" colorScheme="teal">{buttonText}</Button>
    </Stack>
  )
}
