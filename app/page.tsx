"use client"
import Image from 'next/image'
import { ChakraProvider, CloseButton, Heading } from '@chakra-ui/react'
import Header from './components/Header'
import TopContainer from './components/TopContainer'
import Feature from './components/Feature'
import Bottomcontainer from './components/Bottomcontainer'
import Footer from './components/Footer'






export default function Home() {
  return (<>
 <Header />
 <TopContainer />
 <Bottomcontainer />
 <Feature />
 
 <Footer />
  



  
  </>)
  
}
