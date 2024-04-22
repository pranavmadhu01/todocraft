"use client";

import {
  useDeleteProject,
  useUpdateProject,
} from "@/backend/project/project.query";
import ConfirmationModal from "@/components/custom/modal/confirmationModal";
import ExportModal from "@/components/custom/modal/exportModal";
import { ActionIcon, Group, Loader, Stack, Text } from "@mantine/core";
import {
  IconCheck,
  IconChevronLeft,
  IconSquareRoundedCheck,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";
import { useDebouncedValue } from "@mantine/hooks";

export default function ProjectPageHeader(props: ProjectWithTodo) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [debounced] = useDebouncedValue(title, 1000);
  const router = useRouter();
  const deleteProject = useDeleteProject();
  const updateProject = useUpdateProject(props?.id, true);
  const firstUpdate = useRef(true);

  function handleDeleteProject() {
    deleteProject.mutate(props?.id);
    router.replace("/dashboard");
  }

  function updateProjectTitle(values: { title: string }) {
    updateProject.mutate(values, { onSuccess: () => setLoading(false) });
  }
  useEffect(() => {
    if (props) {
      setTitle(props?.title);
    }
  }, [props]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (debounced) {
      updateProjectTitle({ title: debounced });
    }
  }, [debounced]);
  return (
    <Group justify="space-between">
      <Group align="end">
        <Link href="/dashboard" replace>
          <ActionIcon variant="outline" size={"sm"}>
            <IconChevronLeft />
          </ActionIcon>
        </Link>
        <Stack gap={0}>
          {loading ? (
            <Text size="xs" c="dimmed">
              <Loader size={12} /> title saving...
            </Text>
          ) : (
            <Text size="xs" c={"dimmed"}>
              <IconCheck size={12} /> title saved
            </Text>
          )}
          <input
            type="text"
            className={classes.text_input}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setLoading(true);
            }}
          />
        </Stack>
      </Group>
      <Group>
        <ExportModal project_id={props?.id} />
        <ConfirmationModal
          type="delete"
          modalTitle="Delete Project?"
          modalDescription="All the associated Todos with the project will also be deleted"
          onClick={handleDeleteProject}
        />
      </Group>
    </Group>
  );
}
