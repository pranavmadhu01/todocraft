import { Modal, ModalProps, Text } from "@mantine/core";
import classes from "./styles.module.css";

interface CustomModalLayoutProps {
  onClose: () => void;
  opened: boolean;
  children: any;
  header?: any;
  title?: string;
  subtitle?: string;
  size?: ModalProps["size"];
}
export function CustomModalLayout(props: CustomModalLayoutProps) {
  return (
    <Modal
      opened={props.opened}
      onClose={props.onClose}
      classNames={classes}
      title={props?.title}
      size={props?.size}
    >
      {props?.header && <Modal.Header>{props?.header}</Modal.Header>}
      <Modal.Body>
        {props?.subtitle && (
          <Text className={classes["subtitle"]}>{props?.subtitle}</Text>
        )}
        {props.children}
      </Modal.Body>
    </Modal>
  );
}
