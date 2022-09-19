import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="60px" />
      <Skeleton height="50px" />
      <Skeleton height="40px" />
      <Skeleton height="30px" />
      <Skeleton height="40px" />
      <Skeleton height="50px" />
      <Skeleton height="60px" />
    </Stack>
  );
};

export default ChatLoading;
