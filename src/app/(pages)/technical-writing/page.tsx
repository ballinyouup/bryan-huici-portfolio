import { FileText, Video, Download } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface TechnicalSample {
    title: string
    description: string
    intro?: string
    file: string
    type: 'pdf' | 'video'
    category: string
}

const technicalSamples: TechnicalSample[] = [
    {
        title: 'Technical Proposal',
        description: 'A comprehensive technical proposal demonstrating project planning, requirements analysis, and solution architecture.',
        intro: 'This proposal assignment required developing a detailed project plan that addresses a real-world problem, including research, feasibility analysis, and implementation strategy. The document demonstrates my ability to communicate complex technical concepts to diverse audiences.',
        file: '/proposal.pdf',
        type: 'pdf',
        category: 'Proposal'
    },
    {
        title: 'Professional Resume',
        description: 'Technical resume showcasing skills, experience, and professional accomplishments in a clear, structured format.',
        intro: 'This resume presents my educational background, technical skills, and professional experience in a concise, scannable format optimized for both human readers and applicant tracking systems.',
        file: '/resume.pdf',
        type: 'pdf',
        category: 'Resume'
    },
    {
        title: 'Cover Letter',
        description: 'Professional cover letter demonstrating written communication skills and ability to articulate value proposition.',
        intro: 'This cover letter showcases my ability to tailor professional communication to specific opportunities while highlighting relevant qualifications and demonstrating genuine interest in the position.',
        file: '/cover-letter.pdf',
        type: 'pdf',
        category: 'Cover Letter'
    },
    {
        title: 'Mini Interview',
        description: 'Video interview demonstrating verbal communication skills and professional presentation.',
        intro: 'This mini interview assignment demonstrates my verbal communication abilities, professional presence, and capacity to articulate ideas clearly and confidently in a recorded format.',
        file: 'https://drive.google.com/file/d/1aXwaVTGAdhXElnjvxBeR0FfJr78tqIGr/view?usp=sharing',
        type: 'video',
        category: 'Interview'
    }
]

export default function TechnicalWritingPage() {
    return (
        <div className="pt-20">
            <div className="flex h-full w-full flex-col items-center gap-12 p-8 lg:h-full lg:p-12">
                {/* Header */}
                <div className="flex w-full max-w-5xl flex-col gap-4">
                    <span className="text-[10vw] font-bold sm:text-6xl">
                        TECHNICAL WRITING
                    </span>
                    <p className="text-lg text-white/80">
                        A collection of technical writing samples demonstrating communication skills, documentation abilities, and professional presentation.
                    </p>
                </div>

                {/* About Me Section */}
                <div className="flex w-full max-w-5xl flex-col gap-6 rounded-xl bg-accent p-8 text-white">
                    <h2 className="text-4xl font-bold">ABOUT ME</h2>
                    
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl font-semibold text-secondary-foreground">Education</h3>
                            <p className="text-base leading-relaxed text-white/90">
                                I am currently pursuing a degree in Computer Science with a focus on software engineering and web development. 
                                My coursework includes Data Structures & Algorithms, Database Systems, Web Development, Software Engineering, 
                                and Technical Writing. I have developed a strong foundation in both theoretical concepts and practical application 
                                of modern development practices.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl font-semibold text-secondary-foreground">Work Experience</h3>
                            <p className="text-base leading-relaxed text-white/90">
                                Through various positions, I have developed strong time management, professional communication, and collaborative 
                                skills essential for success in the tech industry. My experience has taught me the importance of meeting deadlines, 
                                working effectively in team environments, and maintaining professional standards in all aspects of my work.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl font-semibold text-secondary-foreground">Skills & Accomplishments</h3>
                            <p className="text-base leading-relaxed text-white/90">
                                I am proficient in TypeScript, JavaScript, React, Next.js, and modern web development frameworks. 
                                My technical skills include full-stack development, database design, cloud deployment (AWS, GCP), 
                                and version control with Git. I am bilingual and have strong written and verbal communication abilities, 
                                which enable me to effectively document technical processes and collaborate with diverse teams.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Writing Samples */}
                <div className="flex w-full max-w-5xl flex-col gap-4">
                    <h2 className="text-4xl font-bold">WRITING SAMPLES</h2>
                    <p className="text-base text-white/80">
                        The following assignments showcase my technical writing abilities across different formats and purposes.
                    </p>
                </div>

                <div className="flex w-full flex-col items-center gap-6 text-white">
                    {technicalSamples.map((sample) => (
                        <div
                            className="flex h-fit w-full max-w-5xl flex-col items-start justify-between gap-4 rounded-xl bg-secondary p-6"
                            key={sample.file}
                        >
                            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                <div className="flex flex-1 flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        {sample.type === 'pdf' ? (
                                            <FileText className="h-6 w-6 text-primary-foreground" />
                                        ) : (
                                            <Video className="h-6 w-6 text-primary-foreground" />
                                        )}
                                        <h4 className="text-2xl font-bold uppercase">
                                            {sample.title}
                                        </h4>
                                    </div>
                                    
                                    <Badge className="w-fit" variant="outline">
                                        {sample.category}
                                    </Badge>

                                    {sample.intro && (
                                        <p className="text-base leading-relaxed text-white/90 italic border-l-4 border-primary pl-4">
                                            {sample.intro}
                                        </p>
                                    )}

                                    <p className="text-base text-white/90">
                                        {sample.description}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2 lg:w-48">
                                    {sample.type === 'pdf' ? (
                                        <>
                                            <Button asChild className="w-full gap-2">
                                                <Link href={sample.file} target="_blank">
                                                    <FileText className="h-5 w-5" />
                                                    View PDF
                                                </Link>
                                            </Button>
                                            <Button asChild variant="outline" className="w-full gap-2">
                                                <a href={sample.file} download>
                                                    <Download className="h-5 w-5" />
                                                    Download
                                                </a>
                                            </Button>
                                        </>
                                    ) : (
                                        <Button asChild className="w-full gap-2">
                                            <Link href={sample.file} target="_blank">
                                                <Video className="h-5 w-5" />
                                                View Video
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
