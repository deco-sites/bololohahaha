import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title?: string;
  description?: string;
  image?: ImageWidget;
}

export default function HeroFlats({
  title = "",
  description =
    "",
  image,
}: Props) {
  return (
    <nav class="lg:mx-auto bg-red-500">
      <div class="flex flex-col items-center gap-8">
        <div
          class="flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 lg:py-36 gap-12 md:gap-20 items-center"
        >

          <div
            class="mx-6 lg:mx-auto lg:w-full space-y-4 gap-4"
          >
            <div
              class="text-white text-[50px] lg:text-[80px] wonky font-fraunces leading-[50px] lg:leading-[80px]  w-full text-center font-semibold mt-16 md:mt-14 lg:mt-14"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <p class="text-lg md:text-md leading-[150%]">
              {description}
            </p>
            <div className='lg:h-[150px] md:h-[100px] h-[50px]'>
              <div className='absolute w-full flex justify-center py-[1rem]'>
                <div className='relative lg:w-[767px] lg:h-[441px] md:w-[514px] md:h-[296px] w-80 h-[184px]'>
                  {image && (
                    <Image
                      src={image}
                      alt={image}
                      decoding="async"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
