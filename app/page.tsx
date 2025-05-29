import CategoriesSection from "@/pages/homepage/categoriessction";
import ElectronicSection from "@/pages/homepage/electronicsection";
import HeroSection from "@/pages/homepage/herosection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ElectronicSection />
      <CategoriesSection />
    </main>
  );
}
