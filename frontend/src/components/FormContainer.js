import { Flex } from "@chakra-ui/react";

const FormContainer = ({ children, width = "x1" }) => {
  return (
    <Flex
      direction="column"
      boxShadow="md"
      rounded="md"
      bgColor="white"
      p="10"
      width={width}
    >
      {children}
    </Flex>
  );
};

export default FormContainer;
