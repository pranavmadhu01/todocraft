import { ActionIcon, Badge, Card, Group, Stack, Text } from "@mantine/core";
import classes from "./styles.module.css";
import {
  IconChevronRight,
  IconClockHour3,
  IconTrash,
} from "@tabler/icons-react";
import { getRelativeTimeFromTimeStamp } from "@/utils/dateTime";
import Link from "next/link";
import { useDeleteProject } from "@/backend/project/project.query";
import ProjectModal from "@/components/custom/modal/projectModal";
import ExportModal from "@/components/custom/modal/exportModal";
import ConfirmationModal from "@/components/custom/modal/confirmationModal";

export default function ProjectCard(props: Project) {
  const deleteProject = useDeleteProject();
  function handleDeleteProject() {
    deleteProject.mutate(props?.id);
  }
  return (
    <Group align="start" gap={2}>
      <Card
        className={classes.wrapper}
        withBorder
        component={Link}
        href={`/dashboard/${props?.id}`}
      >
        <Group className={classes.inner}>
          <Text className={classes.title}>{props?.title}</Text>
        </Group>
        <Group>
          <Text>Tasks included : </Text>
          <Badge variant="light">{props?.todo_count}</Badge>
        </Group>
        <Group className={classes.footer}>
          <IconClockHour3 size={15} />
          <Text size="xs">
            {getRelativeTimeFromTimeStamp(props?.created_at)}
          </Text>
        </Group>
      </Card>
      <Stack gap={5}>
        <Link href={`/dashboard/${props?.id}`}>
          <ActionIcon variant="subtle">
            <IconChevronRight size={15} />
          </ActionIcon>
        </Link>
        <ExportModal project_id={props?.id} compactButton />
        <ProjectModal type="edit" project={props} />
        <ConfirmationModal
          buttonCompact
          type="delete"
          modalTitle="Delete Project?"
          modalDescription="All the associated Todos with the project will also be deleted"
          onClick={handleDeleteProject}
        />
      </Stack>
    </Group>
  );
}
