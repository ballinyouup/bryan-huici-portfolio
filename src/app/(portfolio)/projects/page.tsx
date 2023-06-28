import ProjectsLoading from '@/components/ui/projects-loading'
import { Suspense } from 'react'
import Projects from '@/components/ui/projects'

export default function Page() {
    return (
        <div className="pt-20">
            <Suspense fallback={<ProjectsLoading />}>
                <Projects />
            </Suspense>
        </div>
    )
}
