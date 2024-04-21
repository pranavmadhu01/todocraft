"use client";

import { useUserLogin } from "@/backend/user/user.query";
import CustomButton from "@/components/custom/button";
import {
  CustomPasswordInput,
  CustomTextInput,
} from "@/components/custom/input";
import { emailValidation } from "@/utils/validations";
import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const loginUser = useUserLogin();
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (emailValidation(value) ? null : "Invalid email"),
    },
  });

  function handleSubmit(values: typeof form.values) {
    loginUser.mutate(values, {
      onSuccess: () => {
        router.replace("/dashboard");
      },
    });
  }
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack>
        <CustomTextInput
          required
          withAsterisk
          label="Email"
          placeholder="example@example.com"
          {...form.getInputProps("email")}
        />
        <CustomPasswordInput
          required
          withAsterisk
          label="Password"
          placeholder="Your password"
          {...form.getInputProps("password")}
        />
        <CustomButton fullWidth type="submit">
          Sign in
        </CustomButton>
      </Stack>
    </form>
  );
}
