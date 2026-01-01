import { Center, Input, Box } from "@chakra-ui/react";
import { MyButton } from "../MyButton";
import { login } from "../../services/login";
import { useRef, useState, useEffect } from "react";
import { api } from "../../api";

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const Card = () => {
  const [email, setEmail] = useState<string>("");
  const [userData, setUserData] = useState<null | UserData>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: any | UserData = await api;
      setEmail(data.email);
      setUserData(data);
    };
    fetchData();
  }, []);

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
        {userData === null || userData === undefined ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Loaded Info!</h1>
        )}

        <Center marginBottom="20px">
          <h1>Faça o login</h1>
        </Center>

        <Input
          ref={emailRef}
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
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
