import { client } from '~/lib/client.mts';
import PortableTextComponent from '@/components/ui/portable-text-component';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { wait } from '@/lib/utils';

interface Resume {
    title: string;
    publishedAt: string;
    keywords: string[];
    body: any;
}

export default async function Page() {
    await wait(5000);
    const resume = await client.fetch(`*[_type == "resume"]{body,title, "keywords": keywords[]->title}`) as Resume[];

    if (resume.length === 0 || !resume[0]) {
        return notFound();
    }
    return (
        <div className="flex min-h-full w-full items-start justify-center p-4 pt-20">
            <div className="flex w-full max-w-5xl flex-col items-center justify-center">
                <div className="flex w-full flex-col py-4 gap-8">
                    <h1 className="text-5xl font-bold capitalize">
                        {resume[0].title}
                    </h1>
                    <PortableTextComponent
                        value={resume[0].body ?? {}}
                        onMissingComponent={false}
                    />
                </div>
            </div>
        </div>
    );
}
