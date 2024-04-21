import { Button, ButtonProps } from "@mantine/core";
import classes from "./styles.module.css";

interface CustomButtonProps extends ButtonProps {
  children: any;
  onClick?: () => void;
  type?: "submit" | "reset";
}
export default function CustomButton(props: CustomButtonProps) {
  return <Button classNames={classes} {...props} />;
}
