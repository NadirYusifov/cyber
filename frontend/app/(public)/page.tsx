import HeroSection from "@/pages/homepage/herosection";
import BannersSection from "@/pages/homepage/bannerssection";
import ProductsSection from "@/pages/homepage/productssection";
import CategoriesSection from "@/pages/homepage/categoriessction";
import ElectronicSection from "@/pages/homepage/electronicsection";
import BannersSecondSection from "@/pages/homepage/bannerssecondsection";
import DiscountsProductsSection from "@/pages/homepage/discountsproducts";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ElectronicSection />
      <CategoriesSection />
      <ProductsSection />
      <BannersSection />
      <DiscountsProductsSection />
      <BannersSecondSection />
    </main>
  );
}
