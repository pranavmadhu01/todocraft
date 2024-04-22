import { Checkbox, Stack } from "@mantine/core";
import { CustomTextInput } from "../custom/input";
import CustomButton from "../custom/button";

interface Props {
  type: "edit" | "create";
  form: any;
  onSubmit: (values: any) => void;
}
export default function TodoForm(props: Props) {
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
        <CustomTextInput
          label="Description"
          placeholder="Enter the description"
          {...props?.form?.getInputProps("description")}
        />
        {props.type === "edit" && (
          <Checkbox
            label="Mark as Done"
            checked={props?.form?.values?.status}
            {...props?.form.getInputProps("status")}
          />
        )}
        <CustomButton fullWidth type="submit">
          Submit
        </CustomButton>
      </Stack>
    </form>
  );
}
