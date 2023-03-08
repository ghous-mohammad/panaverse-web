"use client"

import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box  bgColor={"gray.100"}>
        <Container
          
          color={"black"}
          maxWidth={1300}
       
        >
         
            <SimpleGrid  gap='30px' templateColumns={{base:'repeat(2,1fr)',lg:'repeat(4,1fr)' }} bgColor="gray.100" >
              <Box >
                <Heading pb={"5"} mt={"5"}>About Us</Heading>
               
                <Text pt={"5"} mb="1">
                  The Future of the Web is Web 3.0, Metaverse, and Edge
                  Computing. Panaverse DAO is a movement to spread these
                  technolgies globally. It is community of Web 3 and Metaverse
                  developers, designers, trainers, startup founders and service
                  providers.
                </Text>
              </Box>

              <Box  mt={"24"}>
               
                <Grid  lineHeight={"7"}>
                  <Text>Visit <Link href="./">PIAIC</Link></Text>
                  <Link href="./">Home</Link>
                  <Link href="./">About us </Link>

                  <Link href="./">Contact Us</Link>

                  <Link href="./">Syllabus</Link>
                </Grid>
              </Box>

              <Box pt={"24"}  >
                <Grid lineHeight={"7"}>
                  <Link href="https://docs.google.com/document/d/17B2Jp_9UMVNnoGncvvbBA9HLFIzOa8YxhM6HobMYff8/edit">
                    Letter to arrange seminars
                  </Link>

                  <Link href="./">Carear</Link>
                  <Link href="./">Earn while you learn </Link>
                  <Link href="./">admission now</Link>

                </Grid>
              </Box>

              <Box >
                {/* <Flex  > */}
                <Heading pb={"10"} pl={"10"} mt={"5"}> Follow us</Heading>

                <HStack fontSize={"4xl"} pr={"24"}>
                  <Link
                    href="https://www.youtube.com/@panaverse"
                    target={"_blank"}
                  >
                    {" "}
                    <FaYoutube color="red" />{" "}
                  </Link>
                  <Link
                    href="https://www.youtube.com/@panaverse"
                    target={"_blank"}
                  >
                    {" "}
                    <FaFacebook color="#3b5998" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@panaverse"
                    target={"_blank"}
                  >
                    <FaTwitter color="#00acee" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@panaverse"
                    target={"_blank"}
                  >
                    <FaDiscord color="#5865F2" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@panaverse"
                    target={"_blank"}
                  >
                    <FaInstagramSquare color="#d62976" />
                  </Link>

                  <Link
                    href="https://www.youtube.com/@panaverse"
                    target={"_blank"}
                  >
                    <FaWhatsapp color="green" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@panaverse"
                    target={"_blank"}
                  >
                    <FaGithub color="black" />
                  </Link>
                </HStack>
                {/* 
  </Flex> */}
              </Box>
            </SimpleGrid>
     
        </Container>{" "}
      </Box>
    </>
  );
}
