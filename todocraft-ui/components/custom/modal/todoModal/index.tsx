"use client";

import { useDisclosure } from "@mantine/hooks";
import { CustomModalLayout } from "..";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import CustomButton from "../../button";
import { IconEdit, IconPlus } from "@tabler/icons-react";
import { nameValidation } from "@/utils/validations";
import { ActionIcon } from "@mantine/core";
import {
  useCreateTodo,
  useUpdateTodo,
} from "@/backend/project/todo/todo.query";
import TodoForm from "@/components/forms/todo";

interface Props {
  type: "edit" | "create";
  project_id: string;
  todo?: Todo;
}
export default function TodoModal(props: Props) {
  const [opened, { close: onClose, open }] = useDisclosure(false);
  const createTodo = useCreateTodo(props?.project_id as string);
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      status: false,
    },
    validate: {
      title: (value: string) =>
        nameValidation(value) ? null : "Invalid title",
    },
  });

  function handleCreateTodo(values: typeof form.values) {
    createTodo.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  }
  function handleEditTodo(updateTodo: any, values: typeof form.values) {
    updateTodo.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  }
  switch (props.type) {
    case "create": {
      return (
        <>
          <CustomModalLayout
            {...{
              opened,
              onClose,
              title: "Create New Project",
              subtitle: "Create a new project and start adding todos",
            }}
          >
            <TodoForm
              {...{ type: "create", form: form, onSubmit: handleCreateTodo }}
            />
          </CustomModalLayout>
          <CustomButton
            w={"fit-content"}
            variant="outline"
            leftSection={<IconPlus />}
            onClick={open}
          >
            Add Todo
          </CustomButton>
        </>
      );
    }
    case "edit": {
      const updateTodo = useUpdateTodo(
        props?.project_id,
        props?.todo?.id as string
      );
      useEffect(() => {
        if (props?.todo) {
          form.initialize({
            title: props?.todo?.title,
            description: props?.todo?.description,
            status: props?.todo?.status,
          });
        }
      }, [props?.todo]);
      return (
        <>
          <CustomModalLayout
            {...{
              opened,
              onClose,
              title: "Edit Project",
              subtitle: "Edit the project details",
            }}
          >
            <TodoForm
              {...{
                type: "edit",
                form: form,
                onSubmit: (values) => handleEditTodo(updateTodo, values),
              }}
            />
          </CustomModalLayout>
          <ActionIcon color="yellow" variant="subtle">
            <IconEdit size={15} onClick={open} />
          </ActionIcon>
        </>
      );
    }
  }
}
