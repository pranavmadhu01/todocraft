import { exportMarkdown, generateProjectMarkDown } from "@/utils/md";
import { useDisclosure } from "@mantine/hooks";
import { CustomModalLayout } from "..";
import ReactMarkDown from "react-markdown";
import CustomButton from "../../button";
import { IconDownload } from "@tabler/icons-react";
import {
  ActionIcon,
  Loader,
  Paper,
  ScrollAreaAutosize,
  Text,
} from "@mantine/core";
import classes from "./styles.module.css";
import { useGetProjectById } from "@/backend/project/project.query";

interface Props {
  project_id: string;
  compactButton?: boolean;
}
export default function ExportModal(props: Props) {
  const [opened, { close: onClose, open }] = useDisclosure(false);
  const { data, isLoading, error } = useGetProjectById(
    props?.project_id,
    opened
  );
  const todoMarkdown = (data && generateProjectMarkDown(data)) ?? "";
  return (
    <>
      <CustomModalLayout
        {...{
          opened,
          onClose,
          title: "Export Project as MarkDown",
          subtitle: "Preview the markdown and save it as a file",
          size: "xl",
        }}
      >
        {isLoading && <Loader size={"sm"} />}
        {error && <Text c={"red"}>Error fetching data</Text>}
        {data && (
          <>
            <ScrollAreaAutosize h={400} scrollbarSize={5} offsetScrollbars>
              <Paper className={classes.markdown_wrapper}>
                <ReactMarkDown>{todoMarkdown}</ReactMarkDown>
              </Paper>
            </ScrollAreaAutosize>
            <CustomButton
              leftSection={<IconDownload size={18} />}
              disabled={!props}
              fz={"sm"}
              variant="light"
              size="xs"
              ml={"auto"}
              w={"fit-content"}
              onClick={() => exportMarkdown(data, todoMarkdown)}
            >
              Export
            </CustomButton>
          </>
        )}
      </CustomModalLayout>
      {props?.compactButton ? (
        <ActionIcon variant="subtle" onClick={open}>
          <IconDownload size={15} />
        </ActionIcon>
      ) : (
        <CustomButton
          leftSection={<IconDownload size={18} />}
          disabled={!props}
          fz={"sm"}
          variant="light"
          size="xs"
          onClick={open}
        >
          Export
        </CustomButton>
      )}
    </>
  );
}
