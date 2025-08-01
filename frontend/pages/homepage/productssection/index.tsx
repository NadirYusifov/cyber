import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AirPodsMax from '@/public/airpodsmax.png';

export default function ProductsSection() {
  return (
    <section>
      <div className='container mx-auto px-4'>
        <div className='bg-white-smoke w-[16.75rem] h-[27rem] rounded-[0.563rem] px-4 py-6'>
            <span className='flex flex-row justify-end'>
              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.93415 13.5443L12.3152 22.3569C12.6397 22.6616 12.8019 22.814 12.9999 22.814C13.1979 22.814 13.3602 22.6616 13.6846 22.3569L23.0657 13.5443C25.6739 11.0942 25.9907 7.06217 23.797 4.2348L23.3845 3.70316C20.7603 0.320813 15.4928 0.88806 13.6488 4.75157C13.3883 5.29732 12.6115 5.29732 12.351 4.75157C10.5071 0.88806 5.23955 0.320813 2.61531 3.70316L2.20284 4.2348C0.00918293 7.06217 0.325915 11.0942 2.93415 13.5443Z" stroke="#919191" stroke-opacity="0.77" stroke-width="1.4" />
              </svg>
            </span>
            <div className='flex flex-col justify-center items-center'>
            <picture className='py-4'>
              <Image src={AirPodsMax} width={160} height={160} quality={100} alt='Airpods Max' />
            </picture>
            <article className='text-center w-[14.75rem]'>
              <h3 className='text-[16px] font-medium leading-6'>AirPods Max Silver Starlight Aluminium</h3>
              <p className="text-[24px] font-semibold leading-6 tracking-[3%] pt-4 pb-6">$549</p>
              <Button variant={"default"} size={"lg"}>Buy Now</Button>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}
