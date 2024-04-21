import { Anchor, Paper, Title, Text, Container, Button } from "@mantine/core";
import LoginForm from "@/components/forms/auth/login";

export default function LoginPage() {
  return (
    <div>
      <Container size={420} my={40}>
        <Title ta="center">Welcome back!</Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component="a" href="/auth/signup">
            Create account
          </Anchor>
        </Text>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <LoginForm />
        </Paper>
      </Container>
    </div>
  );
}
