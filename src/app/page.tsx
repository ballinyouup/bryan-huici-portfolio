export default function Page() {
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="flex flex-col items-start justify-start gap-4 p-6 md:justify-center md:p-0">
                    <h3 className="grid w-full grid-flow-row text-8xl font-semibold md:grid-flow-col">
                        <span>BRYAN</span>
                        <span className="hidden text-5xl md:flex">&nbsp;</span>
                        <span>HUICI</span>
                    </h3>
                    <p className="grid w-fit grid-flow-row text-3xl font-semibold md:grid-flow-col">
                        <span>Front-End</span>
                        <span className="hidden md:flex">/</span>
                        <span>Full-Stack</span>
                        <span className="hidden text-base md:flex">&nbsp;</span>
                        <span>Software Engineer</span>
                    </p>
                </div>
            </div>
            <div className="h-screen w-full bg-blue-300">test</div>
            <div className="h-screen w-full bg-gray-900">test</div>
        </>
    )
}
