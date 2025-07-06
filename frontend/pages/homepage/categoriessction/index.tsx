'use client'

import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '@/components/common/arrow';

export default function CategoriesSection() {
    const sliderRef = useRef<Slider | null>(null);
    
    const slideritem = [
        {
            icon: '📱',
            title: 'Phones'
        },
        {
            icon: '⌚',
            title: 'Smart Watches'
        },
        {
            icon: '📷',
            title: 'Cameras'
        },
        {
            icon: '🎧',
            title: 'Headphones'
        },
        {
            icon: '🖥️',
            title: 'Computers'
        },
        {
            icon: '🎮',
            title: 'Gaming'
        },
        {
            icon: '',
            title: 'Tablets'
        },
        {
            icon: '💻',
            title: 'Laptops'
        },
        {
            icon: '🕶️',
            title: 'VR'
        },
        {
            icon: '⌨️',
            title: 'Accessory'
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    rows: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    rows: 3
                }
            },
        ]
    }

    return (
        <section className='categories-section my-32'>
            <div className='container mx-auto px-4'>
                <div className='categories-area'>
                    <div className='flex justify-between items-center mb-8'>
                        <article className='categories-header flex items-center'>
                            <h3 className='text-2xl tracking-[1%] leading-8 font-medium inline-block'>Browse By Category</h3>
                        </article>
                        <div className='flex gap-x-5 items-center'>
                        <div onClick={() => sliderRef.current?.slickPrev()}>
                            <PrevArrow />
                        </div>
                        <div onClick={() => sliderRef.current?.slickNext()}>
                            <NextArrow />
                        </div>
                        </div>
                    </div>
                
                    <div className='categories-slider text-center'>
                        <Slider ref={sliderRef} {...settings}>
                            {slideritem.map((item, index) => (
                                <div className='flex flex-row justify-center items-center px-2 py-3'>
                                    <div className='bg-bright-gray rounded-[0.938rem] w-full  h-[7.5rem] !flex flex-col justify-center' key={index}>
                                        <span>{item.icon}</span>
                                        <article className='text-[1rem] font-medium leading-6'>{item.title}</article>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}
