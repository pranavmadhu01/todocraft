import CustomButton from "@/components/custom/button";
import ExportModal from "@/components/custom/modal/exportModal";
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
        <ExportModal {...props} />
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
