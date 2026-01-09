
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectPageClient from "./ProjectPageClient";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}
