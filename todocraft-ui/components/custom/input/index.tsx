import {
  NumberInput,
  NumberInputProps,
  PasswordInput,
  PasswordInputProps,
  Select,
  SelectProps,
  TextInput,
  TextInputProps,
  Textarea,
  TextareaProps,
} from "@mantine/core";
import classes from "./styles.module.css";
import { DateTimePicker, DateTimePickerProps } from "@mantine/dates";

export function CustomTextInput(props: TextInputProps) {
  return <TextInput {...props} classNames={classes} />;
}

export function CustomPasswordInput(props: PasswordInputProps) {
  return <PasswordInput type="password" {...props} classNames={classes} />;
}

export function CustomNumberInput(props: NumberInputProps) {
  return <NumberInput {...props} classNames={classes} />;
}

export function CustomTextAreaInput(props: TextareaProps) {
  return <Textarea {...props} classNames={classes} />;
}

export function CustomSelectInput(props: SelectProps) {
  return <Select {...props} classNames={classes} />;
}

export default function CustomDateTimePicker(props: DateTimePickerProps) {
  return <DateTimePicker {...props} classNames={classes} />;
}
