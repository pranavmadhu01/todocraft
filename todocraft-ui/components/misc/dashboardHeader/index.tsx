import { Container, Highlight } from "@mantine/core";
import classes from "./styles.module.css";
import AvatarMenu from "./avatarMenu";

export default function DashboardHeader() {
  return (
    <Container w={"100%"} size={"xl"}>
      <header className={classes.header}>
        <Highlight
          ta="center"
          highlight={["craft"]}
          className={classes.header_title}
          highlightStyles={{
            backgroundImage:
              "linear-gradient(45deg, var(--mantine-primary-color-3), var(--mantine-primary-color-5))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Todo Craft
        </Highlight>
        <AvatarMenu />
      </header>
    </Container>
  );
}
