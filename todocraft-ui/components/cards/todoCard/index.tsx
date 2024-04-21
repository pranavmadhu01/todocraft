import {
  ActionIcon,
  Badge,
  Card,
  Checkbox,
  Divider,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./styles.module.css";
import { IconTrash } from "@tabler/icons-react";
import { getRelativeTimeFromTimeStamp } from "@/utils/dateTime";
import TodoModal from "@/components/custom/modal/todoModal";

export default function TodoCard(
  props: Todo & { compactView: boolean; project_id: string }
) {
  return (
    <Group align="start" gap={2}>
      <Card className={classes.wrapper} withBorder>
        <Group className={classes.header}>
          <Text className={classes.title}>{props?.title}</Text>
          <Checkbox
            checked={props?.status}
            label={
              <Badge
                variant="light"
                size="xs"
                color={props?.status ? "teal" : "red"}
              >
                {props?.status ? "Done" : "Todo"}
              </Badge>
            }
            labelPosition="left"
            size="xs"
          />
        </Group>
        {!props.compactView && (
          <>
            <Divider variant="dotted" />
            {props?.description && props?.description.length > 0 ? (
              <Text size="sm">{props?.description}</Text>
            ) : (
              <Text size="xs" c={"dimmed"}>
                No description provided
              </Text>
            )}
            <Divider variant="dotted" />
            <Group className={classes.footer}>
              <Text size="xs" c={"dimmed"}>
                Created : {getRelativeTimeFromTimeStamp(props?.created_at)}
              </Text>
              <Text size="xs" c={"dimmed"}>
                Updated : {getRelativeTimeFromTimeStamp(props?.updated_at)}
              </Text>
            </Group>{" "}
          </>
        )}
      </Card>
      <Stack gap={5}>
        <TodoModal type="edit" todo={props} project_id={props?.project_id} />
        <ActionIcon color="red" variant="subtle">
          <IconTrash size={15} />
        </ActionIcon>
      </Stack>
    </Group>
  );
}
