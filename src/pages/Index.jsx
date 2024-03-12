import React from "react";
import { Box, Container, Flex, Heading, Text, Image, Button, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF, FaMusic, FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" py={8} px={4}>
        {/* Profile Section */}
        <VStack spacing={5} alignItems="flex-start" flex="1">
          <Heading as="h1" size="2xl">
            Beyoncé Knowles
          </Heading>
          <Text fontSize="xl">Singer, Songwriter, Actress, and Record Producer.</Text>
          <HStack spacing={4}>
            <Button leftIcon={<FaPlay />} colorScheme="pink" variant="solid">
              Listen Now
            </Button>
            <Button leftIcon={<FaMusic />} variant="outline">
              Discography
            </Button>
          </HStack>
          <HStack spacing={4}>
            <Link href="https://www.instagram.com/beyonce" isExternal>
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link href="https://twitter.com/Beyonce" isExternal>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link href="https://www.facebook.com/beyonce" isExternal>
              <Icon as={FaFacebookF} w={6} h={6} />
            </Link>
          </HStack>
        </VStack>
        {/* Image Section */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Image borderRadius="full" boxSize="300px" objectFit="cover" src="https://images.unsplash.com/photo-1543100716-159c0313ba9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxCZXlvbmNlfGVufDB8fHx8MTcxMDI3ODk1MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Beyoncé" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
