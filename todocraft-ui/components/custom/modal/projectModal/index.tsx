"use client";

import { useDisclosure } from "@mantine/hooks";
import { CustomModalLayout } from "..";
import { useForm } from "@mantine/form";
import {
  useCreateProject,
  useUpdateProject,
} from "@/backend/project/project.query";
import ProjectForm from "@/components/forms/project";
import { useEffect } from "react";
import CustomButton from "../../button";
import { IconEdit, IconPlus } from "@tabler/icons-react";
import { nameValidation } from "@/utils/validations";
import { ActionIcon } from "@mantine/core";

interface Props {
  type: "edit" | "create";
  project?: Project;
}
export default function ProjectModal(props: Props) {
  const [opened, { close: onClose, open }] = useDisclosure(false);
  const createProject = useCreateProject();
  const form = useForm({
    initialValues: {
      title: "",
    },
    validate: {
      title: (value: string) =>
        nameValidation(value) ? null : "Invalid title",
    },
  });

  function handleCreateProject(values: typeof form.values) {
    createProject.mutate(values, {
      onSuccess: () => {
        form.reset();
        onClose();
      },
    });
  }

  function handleEditProject(updateProject: any, values: typeof form.values) {
    updateProject.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  }
  const updateProject = useUpdateProject(props?.project?.id as string);
  useEffect(() => {
    if (props?.project) {
      form.initialize({ title: props?.project?.title });
    }
  }, [props?.project]);
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
            <ProjectForm
              {...{ type: "create", form: form, onSubmit: handleCreateProject }}
            />
          </CustomModalLayout>
          <CustomButton
            w={"fit-content"}
            variant="outline"
            leftSection={<IconPlus />}
            onClick={open}
          >
            Add Project
          </CustomButton>
        </>
      );
    }
    case "edit": {
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
            <ProjectForm
              {...{
                type: "edit",
                form: form,
                onSubmit: (values) => handleEditProject(updateProject, values),
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
