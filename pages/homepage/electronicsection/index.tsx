import Image from 'next/image';
import { Button } from '@/components/ui/button';
import VisionPro from '../../../public/visionpro.png';
import AirPodsMax from '../../../public/airpodsmax.png';
import PlayStation from '../../../public/playstation.png';
import MacBookAir from '../../../public/macbookpro14(1).png';
// import IphoneImage from '../../../public/iphoneimage.png';

export default function ElectronicSection() {
  return (
    <section className='w-full h-full'>
      {/* ========== First Grid Section ========== */}
      <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center'>
        <div className='w-full grid grid-cols-1'>

          {/* ========== Playstation 5 Section ========== */}
          <div className='bg-white py-10 lg:py-0'>
            <div className='w-full block lg:flex flex-row-reverse lg:flex-row justify-center lg:justify-between items-center'>
              <picture className='flex justify-center pb-6 lg:pb-0'>
                <Image className='lg:w-[360px] lg:h-[343px] lg:object-cover lg:object-[70%_0%]' src={PlayStation} width={200} height={200} quality={100} alt='MacBook Air' />
              </picture>
              <article className='lg:pl-14 lg:text-left text-center space-y-2 px-4'>
                <h3 className='text-[34px] lg:text-[49px] font-medium leading-10'>Playstation 5</h3>
                <p className='text-philippine-gray text-[1rem] lg:text-[14px] font-medium leading-6'>Incredibly powerful CPUs, GPUs, and a SSD with integrated I/O will redefine your PlayStation experience.</p>
              </article>
            </div>
          </div>

          {/* ========== Second Grid Section ========== */}
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            {/* ========== Apple AirPods Max Section ========== */}
            <div className='w-full bg-bright-gray flex justify-center items-center py-10 lg:py-0'>
              <div className='w-full block lg:flex flex-row-reverse lg:flex-row justify-center lg:justify-between items-center'>
                <picture className='flex justify-center pb-6 lg:pb-0'>
                  <Image className='lg:w-[200px] lg:h-[272px] lg:object-cover lg:object-[100%_0%]' src={AirPodsMax} width={192} height={200} quality={100} alt='MacBook Air' />
                </picture>
                <article className='lg:pl-14 lg:text-left text-center space-y-2 px-4'>
                  <h3 className='w-full lg:w-40 text-[34px] lg:text-[29px] font-light leading-10'>Apple AirPods <span className='font-medium'>Max</span></h3>
                  <p className='w-full text-[1rem] lg:text-[14px] text-philippine-gray font-medium leading-6'>Computational audio. Listen, it`&apos;`s powerful</p>
                </article>
              </div>
            </div>

            {/* ========== Apple Vision Pro Section ========== */}
            <div className='w-full bg-jet flex items-center justify-center lg:justify-start py-10 lg:py-0'>
              <div className='w-full block lg:flex flex-row-reverse lg:flex-row'>
                <picture className='flex justify-center'>
                  <Image className='lg:w-[136px] lg:h-[190px] lg:object-cover lg:object-[100%_0]' src={VisionPro} width={325.87} height={192.44} quality={100} alt='Apple Vision Pro' title='Apple Vision Pro' />
                </picture>
                <article className='w-full lg:w-[160px] lg:pl-4 lg:text-left text-center space-y-2 px-4'>
                  <h3 className='text-white text-[34px] lg:text-[29px] font-light leading-10'>Apple Vision <span className='font-medium'>Pro</span></h3>
                  <p className='w-full text-[16px] lg:text-[14px] text-philippine-gray font-medium leading-6'>An immersive way to experience entertainment</p>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* ========== MacBook Air Section ========== */}
        <div className='w-full h-full bg-bright-gray flex lg:flex-row flex-col justify-center items-center py-10 lg:py-0'>
          <div className='w-full block lg:flex flex-row-reverse justify-center lg:justify-between items-center'>
            <picture className='flex justify-center'>
              <Image className='lg:w-[292px] lg:h-[502px] lg:object-cover lg:object-[10%_0]' src={MacBookAir} width={330.48} height={502} quality={100} alt='MacBook Air' />
            </picture>
            <article className='lg:pl-14 lg:text-left text-center space-y-2 px-4'>
              <h3 className='text-[34px] lg:text-[64px] font-thin leading-10 lg:leading-14'>Macbook <span className='font-medium'>Air</span></h3>
              <p className='w-full lg:w-[360px] text-[1rem] lg:text-[0.9rem] text-philippine-gray font-medium leading-6 py-4'>The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
              <Button className='w-[21.438rem] lg:w-[11.938rem] text-black border-black hover:text-accent hover:bg-black' variant={'outline'} size={'lg'}>Shop Now</Button>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
