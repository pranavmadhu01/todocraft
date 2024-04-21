import { Stack } from "@mantine/core";
import { CustomTextInput } from "../custom/input";
import CustomButton from "../custom/button";

interface Props {
  type: "edit" | "create";
  form: any;
  onSubmit: (values: any) => void;
}
export default function ProjectForm(props: Props) {
  return (
    <form
      onSubmit={props?.form.onSubmit((values: any) => props?.onSubmit(values))}
    >
      <Stack>
        <CustomTextInput
          required
          withAsterisk
          label="Title"
          placeholder="Enter the title"
          {...props?.form?.getInputProps("title")}
        />
        <CustomButton fullWidth type="submit">
          Submit
        </CustomButton>
      </Stack>
    </form>
  );
}
