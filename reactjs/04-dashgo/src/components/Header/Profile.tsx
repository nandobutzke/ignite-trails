import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>
                    Fernando Butzke
                </Text>
                <Text color="gray.300" fontSize="small">
                    nandoproject209@gmail.com
                </Text>
            </Box>
            
            <Avatar size="md" name="Fernando Butzke" src="https://github.com/nandobutzke.png" />
        </Flex>
    );
}