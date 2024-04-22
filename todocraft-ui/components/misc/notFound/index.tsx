import { Flex, Text, ThemeIcon } from "@mantine/core";
import { Icon, IconClipboardList } from "@tabler/icons-react";
import classes from "./styles.module.css";
interface Props {
  label?: string;
  Icon?: React.ReactNode;
}
export default function Notfound(props: Props) {
  return (
    <Flex className={classes["flex"]}>
      <ThemeIcon variant="transparent" opacity={0.3} size={"xl"}>
        {props?.Icon ?? <IconClipboardList size={40} />}
      </ThemeIcon>
      <Text className={classes["text"]}>{props?.label ?? "Noting Here"}</Text>
    </Flex>
  );
}
