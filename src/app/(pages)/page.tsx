import Hero from '@/components/ui/hero'
import Technologies from '@/components/ui/technologies'
import HomeProjects from '@/components/ui/home-projects';
import { Suspense } from 'react'
import ProjectsLoading from '@/components/ui/projects-loading'
export default function Page() {
    return (
        <main className='overflow-hidden'>
            <Hero />
            <Technologies />
            <Suspense fallback={<ProjectsLoading />}>
                <HomeProjects />
            </Suspense>
        </main>
    )
}
