import Image from 'next/image';
import { urlForImage } from '~/lib/image';
import type { Image as SanityImage } from 'sanity';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { MousePointer } from 'lucide-react';
export default function ModalImage({
    image,
    alt,
}: {
    image: SanityImage;
    alt: string;
}) {
    return (
        <div className="h-64 w-full overflow-hidden rounded-xl md:h-80">
            <AlertDialog>
                <AlertDialogTrigger className="relative z-10 h-64 w-full cursor-pointer md:h-80 [&>div]:hover:opacity-100 [&>img]:hover:brightness-[25%]">
                    <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-white opacity-0 transition-all duration-300">
                        <span className="text-3xl font-bold">Expand</span>
                        <MousePointer className="h-8 w-8" fill="#ffffff" />
                    </div>
                    <Image
                        src={urlForImage(image)
                            .width(1600)
                            .height(1600)
                            .fit('max')
                            .auto('format')
                            .url()}
                        alt={alt as string}
                        width={1024}
                        height={1024}
                        className="z-10 w-full rounded-xl object-contain transition-all duration-300"
                    />
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader className="flex items-end">
                        <AlertDialogCancel className="w-fit">
                            x
                        </AlertDialogCancel>
                    </AlertDialogHeader>
                    <Image
                        src={urlForImage(image)
                            .width(1600)
                            .height(1600)
                            .fit('max')
                            .auto('format')
                            .url()}
                        alt={alt as string}
                        width={1024}
                        height={1024}
                        className="z-10 rounded-xl h-full object-cover"
                    />
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
