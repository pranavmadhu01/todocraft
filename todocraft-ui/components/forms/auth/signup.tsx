"use client";

import { useCreateUser } from "@/backend/user/user.query";
import CustomButton from "@/components/custom/button";
import {
  CustomPasswordInput,
  CustomTextInput,
} from "@/components/custom/input";
import { emailValidation, passwordValidation } from "@/utils/validations";
import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const loginUser = useCreateUser();
  const router = useRouter();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validate(values) {
      const errors = {
        email: emailValidation(values.email) ? null : "Invalid email",
        password: passwordValidation(values.password)
          ? null
          : "Password must be at least 6 characters long",
        confirm_password:
          values.password === values.confirm_password
            ? null
            : "Passwords do not match",
      };
      return errors;
    },
  });

  function handleSubmit(values: typeof form.values) {
    loginUser.mutate(values, {
      onSuccess: () => {
        router.replace("/auth/login");
      },
    });
  }
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack>
        <CustomTextInput
          required
          withAsterisk
          label="Name"
          placeholder="Your name"
          {...form.getInputProps("name")}
        />
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
        <CustomPasswordInput
          required
          withAsterisk
          label="Confirm Password"
          placeholder="Confirm password"
          {...form.getInputProps("confirm_password")}
        />
        <CustomButton fullWidth type="submit">
          Sign Up
        </CustomButton>
      </Stack>
    </form>
  );
}
