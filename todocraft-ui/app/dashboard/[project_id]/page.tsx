"use client";

import {
  Checkbox,
  Container,
  Divider,
  Group,
  Loader,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import classes from "./styles.module.css";
import { useParams } from "next/navigation";
import { useGetProjectById } from "@/backend/project/project.query";
import { IconListCheck } from "@tabler/icons-react";
import TodoCard from "@/components/cards/todoCard";
import ProjectPageHeader from "@/components/misc/projectPageHeader";
import { useState } from "react";
import TodoModal from "@/components/custom/modal/todoModal";
export default function ProjectIdPage() {
  const [compactView, setCompactView] = useState(true);
  const { project_id } = useParams() as { project_id: string };
  const { data, isLoading, error } = useGetProjectById(project_id);

  return (
    <div className={classes.wrapper}>
      <Container size={"xl"} w={"100%"}>
        {isLoading && <Loader size={"sm"} />}
        {error && <Text c={"red"}>Error fetching data</Text>}
        {data && (
          <Stack>
            <ProjectPageHeader {...data} />
            <Divider variant="dotted" />
            <Group justify="space-between">
              <Group>
                <Group gap={1}>
                  <ThemeIcon variant="transparent">
                    <IconListCheck size={25} />
                  </ThemeIcon>
                  <Text size="lg">Todos</Text>
                </Group>
                <Group gap={3}>
                  <Text size="xs">Completed :</Text>
                  <Text size="xs" c="teal">
                    {data?.completed_todo_count}/{data?.todos?.length}
                  </Text>
                </Group>
                <Checkbox
                  variant="filled"
                  labelPosition="left"
                  label="Compact view"
                  size="xs"
                  checked={compactView}
                  onChange={() => setCompactView((val) => !val)}
                />
              </Group>
              <TodoModal type="create" project_id={project_id} />
            </Group>
            <Stack mt={"lg"}>
              {data?.todos?.map((todo) => (
                <TodoCard
                  key={todo.id}
                  {...todo}
                  compactView={compactView}
                  project_id={data?.id}
                />
              ))}
            </Stack>
          </Stack>
        )}
      </Container>
    </div>
  );
}
