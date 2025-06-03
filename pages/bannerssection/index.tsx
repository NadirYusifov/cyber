import { Button } from "@/components/ui/button";

export default function BannersSection() {
    return (
        <section className='banners-section my-14'>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='banner-grid-first bg-white'>
                    <div className='banner-item'>
                        <article className='banner-content px-8 pt-[1.375rem] pb-14'>
                            <h3>Popular Products</h3>
                            <p className='py-4'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <Button variant={'outline'} size={"lg"}>Shop Now</Button>
                        </article>
                    </div>
                </div>
                <div className='banner-grid-second bg-ghost-white'>
                    <div className='banner-item'>
                        <article className='banner-content px-8 pt-[1.375rem] pb-14'>
                            <h3>Ipad Pro</h3>
                            <p className='py-4'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <Button variant={'outline'} size={"lg"}>Shop Now</Button>
                        </article>
                    </div>
                </div>
                <div className='banner-grid-third bg-platinum'>
                    <div className='banner-item'>
                        <article className='banner-content px-8 pt-[1.375rem] pb-14'>
                            <h3 className=''>Samsung Galaxy</h3>
                            <p className='py-4'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <Button variant={'outline'} size={"lg"}>Shop Now</Button>
                        </article>
                    </div>
                </div>
                <div className='banner-grid-fourth bg-dark-charcoal '>
                    <div className='banner-item'>
                        <article className='banner-content px-8 pt-[1.375rem] pb-14'>
                            <h3 className='text-white'>Macbook Pro</h3>
                            <p className='text-white py-4'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <Button variant={'outline'} size={"lg"}>Shop Now</Button>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
