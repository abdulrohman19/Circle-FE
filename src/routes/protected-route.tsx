import { AppLayout } from "@/layouts/app/layout";
import { useGetMe } from "@/services/me";
import { Text } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const { isError, isFetched } = useGetMe();

  if (isFetched) {
    if (isError) return <Navigate to={"/login"} />;

    return (
      <AppLayout>
        <Outlet />
      </AppLayout>
    );
  }

  return <Text color={"white"}>Loading...</Text>;
}
