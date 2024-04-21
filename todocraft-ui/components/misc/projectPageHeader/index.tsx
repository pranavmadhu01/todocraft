import CustomButton from "@/components/custom/button";
import { ActionIcon, Group, Title } from "@mantine/core";
import { IconChevronLeft, IconDownload, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

export default function ProjectPageHeader(props: ProjectWithTodo) {
  return (
    <Group justify="space-between">
      <Group align="end">
        <Link href="/dashboard" replace>
          <ActionIcon variant="outline" size={"sm"}>
            <IconChevronLeft />
          </ActionIcon>
        </Link>
        <Title order={2}>{props?.title}</Title>
      </Group>
      <Group>
        <CustomButton
          leftSection={<IconDownload size={18} />}
          disabled={!props}
          fz={"sm"}
          variant="light"
          size="xs"
        >
          Export
        </CustomButton>
        <CustomButton
          leftSection={<IconTrash size={18} />}
          color="red"
          disabled={!props}
          fz={"sm"}
          variant="light"
          size="xs"
        >
          Delete
        </CustomButton>
      </Group>
    </Group>
  );
}
