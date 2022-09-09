import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profilePic, setProfilePic] = useState();

  const postProfileImage = () => {};

  const submitHandler = () => {};

  return (
    <VStack spacing="12px" color="black" width="">
      {/* The input box for the "Name" field */}
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(event) => setName(event.target.value)}
        />
      </FormControl>

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

      {/* The input box for the "Confirm Password" field */}
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Enter Your Password Again"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* The place for user to upload a profile picture */}
      <FormControl id="pic" isRequired>
        <FormLabel>Upload Your Profile Picture</FormLabel>
        <Input
          type="file"
          p={1}
          accept="image/*"
          onChange={(event) => postProfileImage(event.target.files[0])}
        />
      </FormControl>

      {/* The "Sign Up" button at the bottom */}
      <Button
        colorScheme="pink"
        width="100%"
        style={{ marginTop: 25, marginBottom: 10 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
