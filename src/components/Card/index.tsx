import { Center, Input, Box } from "@chakra-ui/react";
import { MyButton } from "../MyButton";
import { login } from "../../services/login";
import { useRef } from "react";

export const Card = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    login(email, password);
  };

  return (
    <Box minHeight="100vh" backgroundColor="#270e33" padding="25px">
      <Box
        backgroundColor="#FFFFFF"
        borderRadius="25px"
        padding="30px"
        maxWidth="400px"
        margin="0 auto"
        marginTop="10vh"
      >
        <Center marginBottom="20px">
          <h1>Faça o login</h1>
        </Center>
        <Input ref={emailRef} placeholder="email" />
        <Input ref={passwordRef} placeholder="password" />
        <Center marginTop="20px" flexDirection="column">
          <MyButton
            onClick={handleLogin}
            colorScheme="teal"
            size="sm"
            width="100%"
            marginTop="5px"
          >
            Button
          </MyButton>
        </Center>
      </Box>
    </Box>
  );
};
