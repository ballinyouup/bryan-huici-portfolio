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
import { AspectRatio } from './aspect-ratio';
export default function ModalImage({
    image,
    alt,
}: {
    image: SanityImage;
    alt: string;
}) {
    return (
        <div className="h-full w-full overflow-hidden rounded-xl md:h-80">
            <AlertDialog>
                <AlertDialogTrigger className="relative z-10 h-full w-full cursor-pointer md:h-80 [&>div]:hover:opacity-100 [&>:nth-child(2)]:hover:brightness-[25%]">
                    <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-white opacity-0 transition-all duration-300">
                        <span className="text-3xl font-bold">Expand</span>
                        <MousePointer className="h-8 w-8" fill="#ffffff" />
                    </div>
                    <AspectRatio ratio={16 / 9} className='h-full'>
                    <Image
                        src={urlForImage(image)
                            .width(1600)
                                .height(900)
                            .fit('max')
                            .auto('format')
                            .url()}
                        alt={alt as string}
                            fill
                            className="z-10 w-full min-h-[200px] rounded-xl object-cover transition-all duration-300"
                    />
                    </AspectRatio>
                </AlertDialogTrigger>
                <AlertDialogContent className='w-full h-fit'>
                    <AlertDialogHeader className="flex items-end">
                        <AlertDialogCancel className="w-fit">
                            X
                        </AlertDialogCancel>
                    </AlertDialogHeader>
                    <AspectRatio ratio={16 / 9}>
                    <Image
                        src={urlForImage(image)
                            .width(1600)
                                .height(900)
                            .fit('max')
                            .auto('format')
                            .url()}
                        alt={alt as string}
                            fill
                            className="z-10 w-full min-h-[200px] rounded-xl object-cover transition-all duration-300"
                    />
                    </AspectRatio>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
