import { Box, Image, Text } from "@chakra-ui/react";
import { useHome } from "../hooks/use-home";

export function ListPost() {
  const { threads } = useHome();

  return (
    <Box>
      {threads?.map((thread, index) => {
        return (
          <Box key ={index} padding="4" borderBottom="1px" borderColor="brand.outline">
            <Text color={"white"} marginBottom="2">
              {thread.content}
            </Text>
            {thread.file && (
              <Image 
                src={thread.file}
                alt="Thread image"
                borderRadius="md"
                maxHeight="300px"
                objectFit="cover"
               /> 
            )}
          </Box>
        );
      })}
    </Box>
  );
}
