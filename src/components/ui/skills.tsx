import Image from 'next/image'
const Skills = () => {
    return (
        <div className="relative z-20 flex h-desktop w-full items-start justify-center">
            <div className="flex w-fit flex-col items-center justify-center gap-4 text-center">
                <h3>SKILLS</h3>
                <div className="flex w-full flex-col items-center justify-start gap-16 rounded-md border-2 border-white bg-accent p-8 md:flex-row">
                    <span className="text-start text-3xl font-bold uppercase">
                        Programming
                        <br />
                        Languages:
                    </span>
                    <div className="flex w-full flex-wrap justify-between">
                        <Image
                            src="./typescript.svg"
                            alt="Typescript"
                            height={70}
                            width={70}
                            className="rounded-lg"
                        />
                        <Image
                            src="./javascript.svg"
                            alt="Javascript"
                            height={70}
                            width={70}
                            className="rounded-lg"
                        />
                        <Image
                            src="./python.svg"
                            alt="Python"
                            height={70}
                            width={70}
                            className="rounded-lg"
                        />
                        <Image
                            src="./java.svg"
                            alt="Java"
                            height={70}
                            width={70}
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-16 rounded-md border-2 border-white bg-accent p-8 md:flex-row">
                    <span className="text-start text-3xl font-bold uppercase">
                        Web
                        <br />
                        Development:
                    </span>
                    <div className="flex w-full flex-wrap justify-between gap-6">
                        <Image
                            src="./html.svg"
                            alt="HTML"
                            height={64}
                            width={64}
                            className="rounded-lg"
                        />
                        <Image
                            src="./css.svg"
                            alt="CSS"
                            height={70}
                            width={70}
                            className="rounded-lg"
                        />
                        <Image
                            src="./nextjs.svg"
                            alt="NextJS"
                            height={70}
                            width={70}
                            className="rounded-full border-2 border-white bg-white"
                        />
                        <Image
                            src="./react.svg"
                            alt="React"
                            height={70}
                            width={70}
                            className="rounded-lg"
                        />
                        <Image
                            src="./tailwind.svg"
                            alt="TailwindCSS"
                            height={70}
                            width={70}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
