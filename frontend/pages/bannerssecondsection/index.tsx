import Image from 'next/image';
import BannerSecondImage from '../../public/bannersecond.png';
import { Button } from '@/components/ui/button';

export default function BannersSecondSection() {
  return (
    <section className='w-full mt-20'>
      <div className='relative'>
        <picture className='w-full relative h-64'>
          <Image src={BannerSecondImage} width={6000} height={448} quality={100} alt='Banner 2 Image'/>
        </picture>
        <article className='absolute top-2/5 bottom-0 translate-x-0 left-0 right-0 text-center'>
          <h3 className='text-white text-[4.5rem] font-thin leading-[4.5rem]'>Big Summer <span className='font-medium'>Sale</span></h3>
          <p className='text-sonic-silver text-[1rem] leading-8 pb-10'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
          <Button variant={"outline"} size={"lg"}>Shop Now</Button>
        </article>
      </div>
    </section>
  )
}
