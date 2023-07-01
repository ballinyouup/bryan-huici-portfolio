import Link from 'next/link'
import { Button } from './button'
import { Github, Linkedin, MailIcon } from 'lucide-react'
export default function Footer() {
    //TODO: Turn footer nav buttons into NavButtons
    return (
        <footer className="flex h-fit w-full items-center justify-center snap-start">
            <footer className="grid h-full w-full max-w-5xl grid-flow-row grid-cols-1 gap-8 p-8 text-primary-foreground sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-2 lg:place-content-between lg:gap-0">
                <div className="col-span-1">
                    <span className="text-4xl font-bold">BRYAN HUICI</span>
                    <p className="text-lg">
                        Front-End/Full-Stack Software Engineer
                    </p>
                    <p className="text-sm">
                        © 2023 Bryan Huici All Right&apos;s Reserved
                    </p>
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                    <span className="text-2xl font-bold">Social</span>
                    <div className="grid w-fit grid-flow-col grid-cols-2 grid-rows-2 gap-2">
                        <div className="col-span-1">
                            <Button
                                variant={'secondary'}
                                className="flex w-full items-center justify-start"
                            >
                                <Link
                                    href="https://www.github.com/ballinyouup"
                                    className="flex w-fit items-center justify-start gap-2"
                                    passHref
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                    <span className="text-lg font-bold">
                                        Twitter
                                    </span>
                                </Link>
                            </Button>
                        </div>
                        <div className="col-span-1">
                            <Button
                                variant={'secondary'}
                                className="flex w-full items-center justify-start"
                            >
                                <Link
                                    href="https://www.linkedin.com/in/bryanhuici/"
                                    className="flex w-fit items-center justify-start gap-2"
                                    passHref
                                >
                                    <Github
                                        className="h-6 w-6"
                                        fill="#ffffff"
                                    />
                                    <span className="text-lg font-bold">
                                        Github
                                    </span>
                                </Link>
                            </Button>
                        </div>
                        <div className="col-span-1">
                            <Button
                                variant={'secondary'}
                                className="flex w-full items-center justify-start"
                            >
                                <Link
                                    href="https://www.twitter.com/ballin_codes"
                                    className="flex items-start justify-start gap-2"
                                    passHref
                                >
                                    <Linkedin
                                        className="h-6 w-6"
                                        fill="#ffffff"
                                    />
                                    <span className="text-lg font-bold">
                                        LinkedIn
                                    </span>
                                </Link>
                            </Button>
                        </div>
                        <div className="col-span-1">
                            <Button
                                variant={'secondary'}
                                className="flex w-full items-center justify-start"
                            >
                                <Link
                                    href="https://www.twitter.com/ballin_codes"
                                    className="flex items-start justify-start gap-2"
                                    passHref
                                >
                                    <MailIcon className="h-6 w-6" />
                                    <span className="text-lg font-bold">
                                        Email
                                    </span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </footer>
    )
}
