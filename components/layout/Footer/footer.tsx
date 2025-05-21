import Link from 'next/link';
import Image from 'next/image';
import { SocialIcon } from '@/assets/icon';
import Logo from '../../../public/cyberlogo.png'

export default function Footer() {
  return (
    <footer className='bg-black py-26 text-center lg:text-start'>
      <div className='container mx-auto px-4'>
        <div className='footer-area'>
          <div className="footer-links grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
            <div className='footer-grid-one mb-8'>
              <div className='footer-logo flex justify-center lg:justify-start mb-4'>
                <Image src={Logo} width={65.4} height={22.87} quality={100} alt='cyber logo' />
              </div>
              <div className="footer-content">
                <p className='text-[14px] text-american-silver leading-6'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
              </div>
            </div>
            <div className="footer-grid-two mb-8">
              <div className="footer-grid-two-header pb-4">
                <h3 className='text-white font-semibold leading-4'>
                  Services
                </h3>
              </div>
              <div className="footer-grid-two-content text-american-silver flex flex-col space-y-2 leading-8">
                <Link href={"#"}>Bonus program</Link>
                <Link href={"#"}>Gift cards</Link>
                <Link href={"#"}>Credit and payment</Link>
                <Link href={"#"}>Service contracts</Link>
                <Link href={"#"}>Non-cash-account</Link>
                <Link href={"#"}>Payment</Link>
              </div>
            </div>
            <div className="footer-grid-three">
              <div className="footer-grid-three-header pb-4">
                <h3 className='text-white font-bold leading-4'>
                  Assistance to the buyer
                </h3>
              </div>
              <div className="footer-grid-three-content text-american-silver flex flex-col space-y-2 leading-8">
                <Link href={"#"}>Find an order</Link>
                <Link href={"#"}>Terms of delivery</Link>
                <Link href={"#"}>Exchange and return of goods</Link>
                <Link href={"#"}>Guarantee</Link>
                <Link href={"#"}>Frequently asked questions</Link>
                <Link href={"#"}>Terms of use of the site</Link>
              </div>
            </div>
          </div>
          <div className='footer-social flex justify-center lg:justify-start gap-x-9 mt-8'>
            {SocialIcon.map((icon, index) =>
              <div className='footer-icon' key={index}>
                <Link href={icon.link}>
                  <p className='sr-only'>{icon.name}</p>
                  <span>{icon.svg}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
