"use client";

import { useDisclosure } from "@mantine/hooks";
import { CustomModalLayout } from "..";
import CustomButton from "../../button";
import { ActionIcon } from "@mantine/core";
import { IconCheck, IconTrash } from "@tabler/icons-react";

interface Props {
  type: "delete" | "confirm";
  buttonCompact?: boolean;
  onClick: () => void;
  modalTitle: string;
  modalDescription: string;
}
export default function ConfirmationModal(props: Props) {
  const [opened, { close: onClose, open }] = useDisclosure(false);
  return (
    <>
      <CustomModalLayout
        {...{
          opened,
          onClose,
          title: props.modalTitle,
          subtitle: props.modalDescription,
          size: "lg",
        }}
      >
        <CustomButton
          w={"fit-content"}
          ml={"auto"}
          color={props.type === "delete" ? "red" : "teal"}
          onClick={() => {
            props.onClick();
            onClose();
          }}
        >
          {props.type === "delete" ? "Delete" : "Submit"}
        </CustomButton>
      </CustomModalLayout>

      {props?.buttonCompact ? (
        <ActionIcon
          color={props?.type === "delete" ? "red" : "teal"}
          variant="subtle"
        >
          {props?.type === "delete" ? (
            <IconTrash onClick={open} size={15} />
          ) : (
            <IconCheck onClick={open} size={15} />
          )}
        </ActionIcon>
      ) : (
        <CustomButton
          leftSection={
            props?.type === "delete" ? <IconTrash size={15} /> : null
          }
          color={props?.type === "delete" ? "red" : "teal"}
          fz={"sm"}
          variant="light"
          size="xs"
          onClick={open}
        >
          {props?.type === "delete" ? "Delete" : "Submit"}
        </CustomButton>
      )}
    </>
  );
}
