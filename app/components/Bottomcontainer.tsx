"use client";
import {
  Avatar,
  Box,
  Button,
  color,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Progress,
  ProgressLabel,
  Text,
} from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { FcAcceptDatabase } from "react-icons/fc";
import { StarIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Header from "./Header";

export default function Bottomcontainer() {
  return (
    <>
      <Box>
        <Box py={"12"}>
          <Container maxWidth={"90%"}>
            <Heading> Launch a new career in as little as 6 months</Heading>

            <Flex justifyContent={"space-between"}>
              <Box pt={3}>
                <List>
                  <HStack spacing={3}>
                    <Button colorScheme="black" bgColor={"gray.50"} variant="ghost">
                      <Link href={"/Header.tsx"}>helo</Link>
                    </Button>
                    <Button colorScheme="#FFFFFF" bgColor={"gray.50"} variant="ghost">
                      helo
                    </Button>
                    <Button colorScheme="#FFFFFF" bgColor={"gray.50"} variant="ghost">
                      helo
                    </Button>
                    <Button colorScheme="#FFFFFF" bgColor={"gray.50"} variant="ghost">
                      helo
                    </Button>
                    <Button colorScheme="#FFFFFF" bgColor={"gray.50"} variant="ghost">
                      helo
                    </Button>
                    <Button colorScheme="#FFFFFF" bgColor={"gray.50"} variant="ghost">
                      helo
                    </Button>
                  </HStack>
                </List>
               
              </Box>
            </Flex>
            <Divider orientation="horizontal" w="90%" />

            <Box border={"2px"} borderColor={"gray.300"} borderRadius={"12"} mt={"1"}>
              {/* textsection start */}
              <Box pt={"10"} pl={"10"}>
                <Heading>Blockchain development</Heading>

                <Text py={"15"}>
                  avarage salary of blockchain developer in international market
                </Text>
                  
                <Box>

                    <HStack>
                    <Box
                      backgroundColor={"blackAlpha.300"}
                      w="52"
                      mt={"3"}
                      borderRadius={"5"}
                      >
                      <Text
                        color="blackAlpha.900"
                        alignContent={"center"}
                        verticalAlign={"text-bottom"}
                        p={"1"}
                      >
                        Blockchain development
                      </Text>
                    </Box>
                    <Text pt={"3"}>$100</Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Box
                      backgroundColor={"blue.400"}
                      w="96"
                      my={"3 "}
                      borderRadius={"5"}
                    >
                      <Text
                        color="whitesmoke"
                        alignContent={"center"}
                        verticalAlign={"text-bottom"}
                        p={"1"}
                      >
                        Blockchain development
                      </Text>
                    </Box>
                    <Text>$50000</Text>
                  </HStack>
                </Box>

          

                <Box>
                  <Text py={"5"} fontSize={"15px"}>
                    {" "}
                    job opening : 396,314
                  </Text>
                  <Text fontSize={"15px"}>
                    {" "}
                    Projected 10 year growth: +10.2%***
                  </Text>
                </Box>

                <Box w={"96"} pt={"14"}>
                  <HStack>
                    <Avatar
                      size="xl"
                      name="Christian Nwamba"
                      src="https://bit.ly/code-beast"
                      />

                    <Text pl={3}>
                      Earning my Blockchain development: Professional
                      Certificate is one of the biggest accomplishments I’ve
                      made in my education, and it was a key stepping stone to
                      my new career.
                    </Text>
                  </HStack>
                  <Text ml={"32"} pt={"3"} fontWeight={"400"}>
                    {" "}
                    -Christian Nwamba{" "}
                  </Text>
                </Box>
              </Box>
<Box display={"flex"}  ml={"620"} marginTop={"-370px"} >
              <Box maxW="350px" borderWidth="1px" borderRadius= "lg" marginTop={"15"} marginBottom={"50"} boxShadow={"md"} borderColor={"gray.100"}>
                <Box style={{borderTopLeftRadius:'2.75%', borderTopRightRadius:'2.75%', overflow:"hidden"}}>

                <Image
                  src="/blockchain.jpg"
                  alt="blockchain-pic"
                  width={"350"} height={"50"} />
                  </Box>
                <Box pl={"4"} pr={"4"}>
                  <HStack pt={"2"}>

                    <Image src="/Panaverse-Logo.png " alt=""  width="65" height={"32"} />

             
                  </HStack>
                  <h3 style={{fontWeight:500, fontSize:24, paddingBottom:8, paddingTop:8}}>Blockchain development</h3>
                 
                  <Text fontSize={13}>skills you will gain: full-stack Web 3.0 ,3D & metaverse tempelates,frontend developer,blockchain development...</Text>
                {/* bottom text */}
                <Box mt={"15"}>

                <HStack>
                <Text fontWeight={600}>4.8</Text>
                <StarIcon color={"teal.300"} />
                <Text>(10k joined) </Text>

                </HStack>
                <Text fontSize={13} pb={"5"}>Beginners . Professional Certificate . 1 year program</Text>
                   
                </Box>
                </Box>
        {/* bottom text end */}

                
                </Box>
              </Box>
              {/* textsection end */}


              


            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
