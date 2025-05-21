import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AirPodsMax from '../../../public/airpodsmax.png';
import VisionPro from '../../../public/visionpro.png';
import PlayStation from '../../../public/playstation.png';
import MacBookAir from '../../../public/macbookpro14(1).png';

export default function ElectronicSection() {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='grid grid-cols-1'>
          <div className='bg-white'>
            <div className='block lg:flex flex-row-reverse lg:flex-row justify-center lg:justify-between items-center'>
              <picture className='flex justify-center'>
                <Image className='lg:w-[360px] lg:h-[343px] lg:object-cover lg:object-[70%_0%]' src={PlayStation} width={360} height={343} quality={100} alt='MacBook Air' />
              </picture>
              <article className='lg:pl-14 lg:text-left text-center'>
                <h3>Playstation 5</h3>
                <p>Incredibly powerful CPUs, GPUs, and a SSD with integrated I/O will redefine your PlayStation experience.</p>
              </article>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='bg-bright-gray'>
              <div className='block lg:flex flex-row-reverse lg:flex-row justify-center lg:justify-between items-center'>
                <picture className='flex justify-center'>
                  <Image className='lg:w-[200px] lg:h-[272px] lg:object-cover lg:object-[100%_0]' src={AirPodsMax} width={104} height={272} quality={100} alt='MacBook Air' />
                </picture>
                <article className='lg:pl-14 lg:text-left text-center'>
                  <h3>Apple AirPods Max</h3>
                  <p>Computational audio. Listen, it's powerful</p>
                </article>
              </div>
            </div>
            <div className='bg-jet'>
              <div className='block lg:flex flex-row-reverse lg:flex-row justify-center lg:justify-between items-center'>
              <picture className='flex justify-center'>
                <Image className='lg:w-[136px] lg:h-[190px] lg:object-cover lg:object-[10%_0]' src={VisionPro} width={136} height={190} quality={100} alt='MacBook Air' />
              </picture>
              <article className='lg:pl-14 lg:text-left text-center'>
                <h3 className='text-white text-[34px] lg:text-[29px] font-thin leading-14'>Apple Vision <span className='font-medium'>Pro</span></h3>
                <p className='w-full lg:w-[360px] text-[14px] text-philippine-gray font-medium leading-6 py-4'>An immersive way to experience entertainment</p>
              </article>
            </div>
              
            </div>
          </div>
        </div>
        <div>
          <div className='bg-bright-gray py-12'>
            <div className='block lg:flex flex-row-reverse justify-center lg:justify-between items-center'>
              <picture className='flex justify-center'>
                <Image className='lg:w-[600px] lg:h-[502px] lg:object-cover lg:object-[10%_0]' src={MacBookAir} width={292} height={502} quality={100} alt='MacBook Air' />
              </picture>
              <article className='lg:pl-14 lg:text-left text-center'>
                <h3 className='text-[34px] lg:text-[64px] font-thin leading-14'>Macbook <span className='font-medium'>Air</span></h3>
                <p className='w-full lg:w-[360px] text-[14px] text-philippine-gray font-medium leading-6 py-4'>The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                <Button className='w-[380px] text-black border-black hover:text-accent hover:bg-black' variant={'outline'} size={'lg'}>Shop Now</Button>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
