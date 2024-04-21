import { Anchor, Paper, Title, Text, Container } from "@mantine/core";
import SignupForm from "@/components/forms/auth/signup";

export default function SignupPage() {
  return (
    <div>
      <Container size={420} my={40}>
        <Title ta="center">Welcome !</Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Already have an Account?{" "}
          <Anchor size="sm" component="a" href="/auth/login">
            Login
          </Anchor>
        </Text>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <SignupForm />
        </Paper>
      </Container>
    </div>
  );
}
