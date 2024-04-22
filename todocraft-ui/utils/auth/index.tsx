"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGetUser } from "@/backend/user/user.query";
import { Loader } from "@mantine/core";

function AuthenticatedLayout({ children }: { children: any }) {
  const { data, isLoading } = useGetUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !data) {
      router.replace("/auth/login");
    }
  }, [isLoading, data]);

  if (isLoading || !data) {
    return <Loader size={"sm"} />; // or a loading spinner
  }

  return <>{children}</>;
}

export default AuthenticatedLayout;
