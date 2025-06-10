import Image from 'next/image';
import BannerSecondImage from '../../public/bannersecond.png';

export default function BannersSecondSection() {
  return (
    <section className='w-full mt-20'>
      <div className='relative'>
        <picture className='w-full relative h-64'>
          <Image src={BannerSecondImage} width={6000} height={448} quality={100} alt='Banner 2 Image'/>
        </picture>
        <article className='absolute top-1/2  text-white'>
          <h3>Big Summer Sale</h3>
          <p>Test content</p>
        </article>
      </div>
    </section>
  )
}
