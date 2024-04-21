"use client";
import classes from "./styles.module.css";
import ProjectModal from "@/components/custom/modal/projectModal";
import {
  Box,
  Container,
  Grid,
  GridCol,
  Loader,
  Stack,
  Text,
} from "@mantine/core";
import { useGetProjects } from "@/backend/project/project.query";
import ProjectCard from "@/components/cards/projectCard";
export default function DashboardPage() {
  const { data, isLoading, error } = useGetProjects();
  return (
    <div className={classes.wrapper}>
      <Container size={"xl"} w={"100%"}>
        <Stack gap={"xl"}>
          <Box ml="auto">
            <ProjectModal type="create" />
          </Box>
          {isLoading && <Loader size={"sm"} />}
          {error && <Text c={"red"}>Error fetching data</Text>}
          <Grid columns={6}>
            {data?.map((project) => (
              <GridCol span={2}>
                <ProjectCard {...project} />
              </GridCol>
            ))}
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}
