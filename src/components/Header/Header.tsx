import { Box, Flex, Container } from "@chakra-ui/react";
import { HeaderLogo } from "./HeaderLogo";

export function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Container maxW="7xl">
        <Flex h="64px" align="center" justify="space-between">
          <HeaderLogo />
        </Flex>
      </Container>
    </Box>
  );
}
