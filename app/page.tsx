import BannersSecondSection from "@/pages/bannerssecondsection";
import BannersSection from "@/pages/bannerssection";
import DiscountsProducts from "@/pages/discountsproducts";
import CategoriesSection from "@/pages/homepage/categoriessction";
import ElectronicSection from "@/pages/homepage/electronicsection";
import HeroSection from "@/pages/homepage/herosection";
import ProductsSection from "@/pages/productssection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ElectronicSection />
      <CategoriesSection />
      <ProductsSection />
      <BannersSection />
      <DiscountsProducts />
      <BannersSecondSection />
    </main>
  );
}
