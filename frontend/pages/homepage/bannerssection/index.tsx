import Image from "next/image";
import { Button } from "@/components/ui/button";
import BannersFirst from '@/public/bannersfirst.png';
import BannersThird from '@/public/bannersthird.png';
import BannersSecond from '@/public/bannerssecond.png';
import BannersFourth from '@/public/bannersfourth.png';

export default function BannersSection() {
    return (
        <section className='banners-section my-14'>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='banner-grid-first bg-white flex flex-col justify-center items-center'>
                    <div className='banner-item flex flex-col justify-center items-center'>
                        <picture>
                            <Image src={BannersFirst} width={360.06} height={327} quality={100} alt="Banner First Image"/>
                        </picture>
                        <article className='banner-content px-8 pt-[1.375rem] pb-14'>
                            <h3 className='font-light text-[2.063rem] leading-12'>Popular Products</h3>
                            <p className='py-4 text-philippine-gray font-medium text-[0.875rem] leading-6'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <Button variant={'outline'} size={"lg"}>Shop Now</Button>
                        </article>
                    </div>
                </div>
                <div className='banner-grid-second bg-ghost-white flex flex-col justify-center items-center'>
                    <div className='banner-item flex flex-col justify-center items-center'>
                        <picture>
                            <Image src={BannersSecond} width={360} height={366} quality={100} alt="Banner Second Image"/>
                        </picture>
                        <article className='banner-content px-8 pt-[1.375rem]'>
                            <h3 className='font-light text-[2.063rem] leading-12'>Ipad Pro</h3>
                            <p className='py-4 text-philippine-gray font-medium text-[0.875rem] leading-6'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <Button variant={'outline'} size={"lg"}>Shop Now</Button>
                        </article>
                    </div>
                </div>
                <div className='banner-grid-third bg-platinum flex flex-col justify-center items-center'>
                    <div className='banner-item flex flex-col justify-center items-center'>
                        <picture>
                            <Image src={BannersThird} width={360} height={366} quality={100} alt="Banner Third Image"/>
                        </picture>
                        <article className='banner-content px-8 pt-[1.375rem]'>
                            <h3 className='font-light text-[2.063rem] leading-12'>Samsung Galaxy</h3>
                            <p className='py-4 text-philippine-gray font-medium text-[0.875rem] leading-6'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <Button variant={'outline'} size={"lg"}>Shop Now</Button>
                        </article>
                    </div>
                </div>
                <div className='banner-grid-fourth bg-dark-charcoal flex flex-col justify-center items-center'>
                    <div className='banner-item flex flex-col justify-center items-center'>
                        <picture className=''>
                            <Image src={BannersFourth} width={360} height={376} quality={100} alt="Banner Fourth Image"/>
                        </picture>
                        <article className='banner-content px-8 pt-[1.375rem]'>
                            <h3 className='text-white font-light text-[2.063rem] leading-12'>Macbook Pro</h3>
                            <p className='py-4 text-philippine-gray font-medium text-[0.875rem] leading-6'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <Button variant={'outline'} size={"lg"}>Shop Now</Button>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
