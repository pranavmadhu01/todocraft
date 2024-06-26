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
import Notfound from "@/components/misc/notFound";
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
          {data && data.length > 0 ? (
            <Grid columns={6}>
              {data?.map((project) => (
                <GridCol span={{ base: 6, sm: 3, lg: 2 }} key={project?.id}>
                  <ProjectCard {...project} />
                </GridCol>
              ))}
            </Grid>
          ) : (
            <Notfound label="No Projects Found" />
          )}
        </Stack>
      </Container>
    </div>
  );
}
