export const portableComponents = {
    block: {
        h1: ({ children }: { children?: React.ReactNode }) => (
            <h1 className="text-6xl font-bold">{children}</h1>
        ),
        h2: ({ children }: { children?: React.ReactNode }) => (
            <h2 className="text-5xl font-bold">{children}</h2>
        ),
        h3: ({ children }: { children?: React.ReactNode }) => (
            <h3 className="text-4xl font-bold">{children}</h3>
        ),
        h4: ({ children }: { children?: React.ReactNode }) => (
            <h4 className="text-3xl font-bold">{children}</h4>
        ),
        h5: ({ children }: { children?: React.ReactNode }) => (
            <h5 className="text-2xl font-bold">{children}</h5>
        ),
        h6: ({ children }: { children?: React.ReactNode }) => (
            <h6 className="text-xl font-bold">{children}</h6>
        ),
        normal: ({ children }: { children?: React.ReactNode }) => (
            <p className="[&>a]:font-medium [&>a]:text-primary [&>a]:underline">
                {children}
            </p>
        ),
        span: ({ children }: { children?: React.ReactNode }) => (
            <span className="[&>a]:font-medium [&>a]:text-primary [&>a]:underline">
                {children}
            </span>
        ),
    },
    marks: {
        h1: ({ children }: { children?: React.ReactNode }) => (
            <h1 className="text-6xl font-bold">{children}</h1>
        ),
        h2: ({ children }: { children?: React.ReactNode }) => (
            <h2 className="text-5xl font-bold">{children}</h2>
        ),
        h3: ({ children }: { children?: React.ReactNode }) => (
            <h3 className="text-4xl font-bold">{children}</h3>
        ),
        h4: ({ children }: { children?: React.ReactNode }) => (
            <h4 className="text-3xl font-bold">{children}</h4>
        ),
        h5: ({ children }: { children?: React.ReactNode }) => (
            <h5 className="text-2xl font-bold">{children}</h5>
        ),
        h6: ({ children }: { children?: React.ReactNode }) => (
            <h6 className="text-xl font-bold">{children}</h6>
        ),
        normal: ({ children }: { children?: React.ReactNode }) => (
            <p className="[&>a]:font-medium [&>a]:text-primary [&>a]:underline">
                {children}
            </p>
        ),
        span: ({ children }: { children?: React.ReactNode }) => (
            <span className="[&>a]:font-medium [&>a]:text-primary [&>a]:underline">
                {children}
            </span>
        ),
    },
    listItem: {
        bullet: ({ children }: { children?: React.ReactNode }) => (
            <li className="ml-4 list-disc">{children}</li>
        ),
    },
    types: {
        lineBreak: () => <br />,
    },
}
