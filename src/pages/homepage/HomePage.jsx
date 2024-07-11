import HeroSection from "../../components/homepage/HeroSection";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import ExampleWrapper from "../../components/modal/SpringModal";
import HomeTOC from "../../components/homepage/HomeTOC";
import SwapColumnFeatures from "../../components/homepage//SwapColumnFeatures";

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ExampleWrapper/>
      <HomeTOC/>
      <SwapColumnFeatures/>
    </div>
  );
};

export default HomePage;
