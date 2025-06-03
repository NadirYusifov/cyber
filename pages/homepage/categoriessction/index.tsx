'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '@/components/common/arrow';

export default function CategoriesSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                    slidesPerRow: 3
                }
            }
        ]
    }

    return (
        <section className='categories-section my-32'>
            <div className='container mx-auto px-4'>
                <div className='categories-area'>
                    <article className='categories-header inline-block mb-8'>
                        <h3 className='text-2xl tracking-[1%] leading-8 font-medium'>Browse By Category</h3>
                    </article>
                    <div className='categories-slider text-center'>
                        <Slider {...settings}>
                            <div className='bg-bright-gray w-40 h-[7.5rem] !flex flex-col justify-center'>
                                <span>📱</span>
                                <article>Phones</article>
                            </div>
                            <div className='bg-bright-gray'>
                                <span>⌚</span>
                                <article>Smart Watches</article>
                            </div>
                            <div>
                                <span>📷</span>
                                <article>Cameras</article>
                            </div>
                            <div>
                                <span>🎧</span>
                                <article>Headphones</article>
                            </div>
                            <div>
                                <span>🖥️</span>
                                <article>Computers</article>
                            </div>
                            <div>
                                <span>🎮</span>
                                <article>Gaming</article>
                            </div>
                            <div>
                                <span></span>
                                <article>Tablets</article>
                            </div>
                            <div>
                                <span>💻</span>
                                <article>Laptops</article>
                            </div>
                            <div>
                                <span>🕶️</span>
                                <article>VR</article>
                            </div>
                            <div>
                                <span>⌨️</span>
                                <article>Accessory</article>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}
