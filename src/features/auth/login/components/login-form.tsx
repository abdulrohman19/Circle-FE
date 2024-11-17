import { Logo } from "@/assets";
import { GreenButton } from "@/components/green-button";
import { Box, Link as ChakraLink, Image, Input, InputGroup, InputRightElement, IconButton, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useLoginForm } from "../hooks/use-login-form";

export function LoginForm() {
  const { register, onSubmit, handleSubmit, errors } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
        width={"305px"}
      >
        <Image src={Logo} width={"100px"} />
        <Text as={"h1"} fontSize={"2xl"} color="white" fontWeight={"bold"}>
          Login to Circle
        </Text>
        <Input
          placeholder="Email/Username"
          {...register("email")}
          color={"white"}
        />

        {errors.email? (
          <Text as={"span"} color={"red"}>
            {errors.email.message}
          </Text>
        ) : null}

        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
            color={"white"}
          />
          <InputRightElement>
            <IconButton
              variant="ghost"
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={togglePasswordVisibility}
            />
          </InputRightElement>
        </InputGroup>

        {errors.password ? (
          <Text as={"span"} color={"red"}>
            {errors.password.message}
          </Text>
        ) : null}

        <Box display={"flex"} justifyContent={"flex-end"}>
          <ChakraLink
            as={ReactRouterLink}
            to={"/forgot-password"}
            color="white"
          >
            Forgot Password?
          </ChakraLink>
        </Box>
        <GreenButton type="submit">Login</GreenButton>
      </Box>
    </form>
  );
}
