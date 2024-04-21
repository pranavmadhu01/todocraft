"use client";

import {
  ActionIcon,
  Avatar,
  Group,
  Loader,
  Menu,
  MenuDivider,
  MenuTarget,
  Text,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import classes from "./styles.module.css";
import { useGetUser } from "@/backend/user/user.query";
import { IconChevronDown, IconLogout } from "@tabler/icons-react";
import { ColorSchemeToggle } from "../../colorSchemeToggle";

export default function AvatarMenu() {
  const { data, isLoading, error } = useGetUser();
  const router = useRouter();
  async function logout() {}
  if (isLoading) return <Loader size={"sm"} />;
  return (
    <Menu withArrow position="bottom-end">
      <MenuTarget>
        <Group className={classes.inner}>
          <Avatar>{data?.name?.charAt(0) || "U"}</Avatar>
          <ActionIcon variant="transparent">
            <IconChevronDown
              style={{ width: rem(14), height: rem(14) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </MenuTarget>
      <Menu.Dropdown miw={300}>
        <Menu.Item>
          <Group>
            <Avatar>{data?.name?.charAt(0) || "U"}</Avatar>
            <div style={{ flex: 1 }}>
              <Text size="xs" fw={500}>
                {data?.name}
              </Text>
              <Text c="dimmed" fz={10}>
                {data?.email}
              </Text>
            </div>
          </Group>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={
            <ThemeIcon variant="transparent" size={20} color="red">
              <IconLogout />
            </ThemeIcon>
          }
        >
          <Text size="xs" fw={500} onClick={logout}>
            Logout
          </Text>
        </Menu.Item>
        <MenuDivider />
        <ColorSchemeToggle />
      </Menu.Dropdown>
    </Menu>
  );
}
