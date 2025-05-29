'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CategoriesSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
    }

    return (
        <section className='categories-section'>
            <div className='container mx-auto px-4'>
                <div className='categories-area'>
                    <article className='categories-header'>
                        <h3 className='text-2xl tracking-[1%] leading-8 font-medium'>Browse By Category</h3>
                    </article>
                    <div className='categories-slider text-center'>
                        <Slider {...settings}>
                            <div className='bg-bright-gray'>
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
