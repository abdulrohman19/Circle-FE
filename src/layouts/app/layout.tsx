import { Box } from "@chakra-ui/react";
import { LeftBar } from "./components/left-bar";
import { RightBar } from "./components/right-bar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Box display={"flex"}>
      <LeftBar />

      <Box w={"561px"} p={"30px"}>
        {children}
      </Box>

      <RightBar />
    </Box>
  );
}
