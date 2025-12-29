import { Text, HStack } from "@chakra-ui/react";

export function HeaderLogo() {
  return (
    <HStack spacing={2}>
      <Text fontSize="lg" fontWeight="bold" color="teal.500">
        DIO Bank Portal
      </Text>
    </HStack>
  );
}
