import ProjectsLoading from "@/components/ui/projects-loading";
import Projects from "@/components/ui/projects";
import { Suspense } from "react";
export default function Page() {
    return <Suspense fallback={<ProjectsLoading />}><Projects /></Suspense>;
}