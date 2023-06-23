import Image from 'next/image'
import DownArrow from './down-arrow'
const Skills = () => {
    return (
        <div className="relative z-20 flex h-phone sm:h-desktop w-full items-start justify-center">
            <div className="flex w-fit flex-col items-center justify-center gap-4 text-center">
                <h3 className="text-[10vw] md:text-6xl">TECHNOLOGIES</h3>
                <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-3 p-8">
                    <Image
                        src="/typescript.svg"
                        alt="Typescript"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/javascript.svg"
                        alt="Javascript"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/python.svg"
                        alt="Python"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/java.svg"
                        alt="Java"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white p-1 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/nextjs.svg"
                        alt="NextJS"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/react.svg"
                        alt="React"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white p-1 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="./tailwind.svg"
                        alt="Tailwind"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/html.svg"
                        alt="HTML"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white p-2 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/css.svg"
                        alt="CSS"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white p-1 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/django.svg"
                        alt="Django"
                        height={70}
                        width={70}
                        className="rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/docker.svg"
                        alt="Docker"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/cloudrun.svg"
                        alt="Google Cloud Run"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white p-1 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/cloudbuild.svg"
                        alt="Google Cloud Build"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/git.svg"
                        alt="Git"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/cicd.svg"
                        alt="CI/CD"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/artifact.svg"
                        alt="Google Cloud Artifact Registry"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white p-1 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/actions.svg"
                        alt="Github Actions"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white p-1 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/nextauth.png"
                        alt="NextAuth"
                        height={66}
                        width={66}
                        className="rounded-lg bg-white p-1 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/reactquery.svg"
                        alt="React Query"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white p-1 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                    <Image
                        src="/prisma.svg"
                        alt="Prisma"
                        height={70}
                        width={70}
                        className="rounded-lg bg-white p-1 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-slate-700"
                    />
                </div>
            </div>
            <DownArrow />
        </div>
    )
}

export default Skills
