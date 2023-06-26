import Hero from '@/components/ui/hero'
import Technologies from '@/components/ui/technologies'
import Projects from '@/components/ui/projects'
import { Suspense } from 'react'
import ProjectsLoading from '@/components/ui/projects-loading'
export default function Page() {
    return (
        <main>
            <Hero />
            <Technologies />
            <Suspense fallback={<ProjectsLoading />}>
                <Projects />
            </Suspense>
        </main>
    )
}
