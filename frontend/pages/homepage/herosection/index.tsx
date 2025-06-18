import Image from 'next/image';
import { Button } from '@/components/ui/button';
import IPhoneImage from '../../../public/iphoneimage.png';

export default function HeroSection() {
  return (
    <section className='bg-linear'>
      <div className='container mx-auto px-4 block lg:flex items-center lg:justify-between'>
        <div className='hero-content text-center lg:text-left py-22'>
          <article className='hero-text'>
            <h4 className='text-white/50 text-[25px] font-semibold leading-8'>Pro.Beyond.</h4>
            <h1 className='text-white text-7xl lg:text-[96px] font-thin leading-[72px] py-6'>IPhone 14 <span className='font-semibold'>Pro</span></h1>
            <p className='text-philippine-gray text-[18px] leading-6 font-medium'>Created to change everything for the better. For everyone</p>
          </article>
          <div className='hero-button pt-6'>
            <Button variant='outline' size={'lg'}>
              Shop Now
            </Button>
          </div>
        </div>
        <picture className='flex flex-col items-center'>
          <Image src={IPhoneImage} width={406} height={632} quality={100} alt='Iphone Image'/>
        </picture>
      </div>
    </section>
    // <>
    // </>
  );
}
