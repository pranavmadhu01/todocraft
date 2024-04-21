import {
  showNotification,
  hideNotification,
  updateNotification,
} from "@mantine/notifications";

export function _showNotification(
  id: string,
  title: string,
  message: string,
  color?: string,
  autoClose?: number | boolean
) {
  return showNotification({
    id,
    title,
    message,
    color,
    autoClose,
  });
}

export function _hideNotification(id: string) {
  return hideNotification(id);
}

export function _updateNotification(id: string, message: string) {
  return updateNotification({ id, message });
}
