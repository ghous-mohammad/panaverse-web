"use client";
import { ReactIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiConversation } from "react-icons/bi";
import { BsCodeSlash, BsFillStarFill } from "react-icons/bs";
import { GrMoney, GrTechnology } from "react-icons/Gr";
import  MdAssignmentAdd, { MdAssessment, MdAssignment, MdWindow }  from "react-icons/md";



export default function Feature() {
  return (
    <>
    
      <Container maxWidth="80%">
        <Box mb={"14"}>
          <Box textAlign={"center"}>
          

            <Heading>Why Choose us?</Heading>
            <Text mt="2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ipsa, exercitationem doloribus autem blanditiis omnis ab inventore
              mollitia unde eaque aperiam in totam, impedit expedita deleniti
              doloremque fuga sapiente natus?{" "}
            </Text>
          </Box>
        </Box>
      </Container>

      <Container maxWidth={"60%"}>
        <Box my={15}>
          <SimpleGrid columns={2} spacing={10} my="16">
            <Box>
              <HStack>
                <BiConversation  fontSize={50} />
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </HStack>
            </Box>

            <Box>
              <HStack>
              <BsCodeSlash fontSize={50}  />
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <GrTechnology fontSize={50} />
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <BsFillStarFill fontSize={50} />
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </HStack>
            </Box>

            <Box>
              <HStack>
              {/* <MdAssignmentAdd fontSize={50} /> */}
                <MdAssignment fontSize={50}/>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <GrMoney fontSize={50} />
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </HStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}
