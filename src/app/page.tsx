import Image from "next/image";
import Header from "./components/Header/Header";
import HeroBanner from "./components/Banner/Hero-banner";
import NewHeader from "./components/Header/NewHeader";
import HowItWorks from "./components/HowItWorks";
import DietaryCategories from "./components/DietaryCategories";

export default function Home() {
  return (
    <>
    {/* <Header/> */}
    <NewHeader/>
    <HeroBanner/>
    <HowItWorks />
    <DietaryCategories />
    </>
  );
}
