"use client";
import React from "react";
import {
  Box,

  Button,

  Center,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  List,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { Search2Icon } from "@chakra-ui/icons";
import { MoonIcon } from "@chakra-ui/icons";



export default function Header() {
  return (
    <>
      <Box px="28" backgroundColor={"#F5F5F5	"} py="0.5" boxShadow={"md"}>
        <Container maxW={"100%"}>

          <Flex justifyContent={"space-between"} alignItems={"center"}>

        <HStack>
          <Image
            src="/Panaverse-Logo.png"
            alt="this panaverse Logo"
            width={"100"}
            height={"50"}
            ></Image>
          <Box py="10" px="5" >
            <List fontWeight={600} pt="2.5" >
              <HStack display={{lg:'flex',base:'none'}}>
                <Link href="./">
                  <ListItem px={5}>HOME </ListItem>
                </Link>
                <Link href="./">
                  <ListItem px={5}>ABOUT </ListItem>
                </Link>
                <Link href="">
                  <ListItem px={5}>CONTACT </ListItem>
                </Link>
              </HStack>
            </List>
          </Box>
        </HStack>

            <Box  >
              <HStack >

              <Search2Icon width={5} height={5}/>
              <MoonIcon width={5} height={5} ml={"7"} />
              <Box display={{lg:'flex',base:'none'}}>
              <Button size="md" variant="solid" ml={"7"} >Login</Button>
                </Box>
              
              </HStack>
             
            </Box>
        </Flex>
          
            </Container>
      </Box>

     
    </>
  );
}
