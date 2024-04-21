"use client";

import {
  Affix,
  MantineColorScheme,
  SegmentedControl,
  useMantineColorScheme,
} from "@mantine/core";
import { IconFocusAuto, IconMoon, IconSun } from "@tabler/icons-react";
interface ColorSchemeData {
  label: any;
  value: MantineColorScheme;
}
export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const colorSchemeData: ColorSchemeData[] = [
    { label: <IconSun size={15} />, value: "light" },
    { label: <IconMoon size={15} />, value: "dark" },
    { label: <IconFocusAuto size={15} />, value: "auto" },
  ];
  return (
    <SegmentedControl
      w={"100%"}
      styles={{
        label: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
      value={colorScheme}
      transitionDuration={500}
      onChange={(value: string) => setColorScheme(value as MantineColorScheme)}
      data={colorSchemeData}
    />
  );
}
