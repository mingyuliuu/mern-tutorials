import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = () => {};

  return (
    <VStack spacing="12px" color="black" width="">
      {/* The input box for the "Email" field */}
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormControl>

      {/* The input box for the "Password" field */}
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* The "Login" button at the bottom */}
      <Button
        colorScheme="pink"
        width="100%"
        style={{ marginTop: 25 }}
        onClick={submitHandler}
      >
        Login
      </Button>

      {/* Getting guest user credentials - for testing purposes */}
      <Button
        variant="solid"
        colorScheme="blue"
        width="100%"
        style={{ marginBottom: 10 }}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
