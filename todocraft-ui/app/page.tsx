import CustomButton from "@/components/custom/button";
import { Container, Group, Highlight, Stack, Text } from "@mantine/core";
import classes from "./styles.module.css";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className={classes.wrapper}>
      <Container size={"xl"} w={"100%"}>
        <Stack className={classes.inner}>
          <Highlight
            ta="center"
            highlight={["craft"]}
            className={classes.title}
            highlightStyles={{
              backgroundImage:
                "linear-gradient(45deg, var(--mantine-primary-color-3), var(--mantine-primary-color-5))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Todo Craft
          </Highlight>
          <Text className={classes.title}></Text>
          <Text className={classes.description}>
            A robust todo management app that allows you to create projects,
            associate todos with them, and even export your todos as a markdown
            file for easy sharing and reference.
          </Text>
          <Group>
            <Link href={"/auth/signup"}>
              <CustomButton>Get Started</CustomButton>
            </Link>
          </Group>
        </Stack>
      </Container>
    </div>
  );
}
