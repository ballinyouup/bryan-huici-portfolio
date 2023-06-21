export default function Page() {
    return (
        <main className="h-full w-full">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h3 className="text-8xl font-bold">
                        <span>BRYAN</span> <span>HUICI</span>
                    </h3>
                    <p className="flex text-3xl font-semibold">
                        <span>Front-End</span>
                        <span>/</span>
                        <span>Full-Stack Software Engineer</span>
                    </p>
                </div>
            </div>
            <div className="h-full w-full bg-blue-300">test</div>
            <div className="h-full w-full bg-gray-900">test</div>
            <footer className="h-1/3 w-full bg-red-800">test</footer>
        </main>
    )
}
