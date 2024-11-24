// import fakeUser from "@/datas/user.json";
// import { useAuthStore } from "@/store/auth";
// import { User } from "@/types/user";
import { useLogin } from "@/services/auth";
import { LoginForm, loginFormSchema } from "@/utils/schemas/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "@/libs/api";
import { useAuthStore } from "@/store/auth";
import { User } from "@/types/user";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onSubmit",
    resolver: zodResolver(loginFormSchema),
  });

  const { mutateAsync } = useLogin();

  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data: LoginForm) => {
      const { token } = await mutateAsync(data);

      Cookies.set("token", token, {
        expires: 1,
        secure: true
      });

      // Fetch user data
      const userData = await api.get("/me");
      useAuthStore.getState().setUser(userData.data as User);

      navigate("/");
    },
    [mutateAsync, navigate]
  );

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
  };
};
