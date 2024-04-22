import {
  Badge,
  Card,
  Checkbox,
  Divider,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./styles.module.css";
import { getRelativeTimeFromTimeStamp } from "@/utils/dateTime";
import TodoModal from "@/components/custom/modal/todoModal";
import ConfirmationModal from "@/components/custom/modal/confirmationModal";
import {
  useDeleteTodo,
  useUpdateTodo,
} from "@/backend/project/todo/todo.query";

export default function TodoCard(
  props: Todo & { compactView: boolean; project_id: string }
) {
  const deleteTodo = useDeleteTodo(props?.project_id, props?.id);
  const updateTodo = useUpdateTodo(props?.project_id, props?.id);

  function handleDeleteTodo() {
    deleteTodo.mutate();
  }

  function updateTodoStatus() {
    updateTodo.mutate({ status: !props?.status });
  }
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
            onChange={updateTodoStatus}
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
        <ConfirmationModal
          buttonCompact
          type="delete"
          modalTitle="Delete Todo?"
          modalDescription="Todo will be deleted permanently."
          onClick={handleDeleteTodo}
        />
      </Stack>
    </Group>
  );
}
