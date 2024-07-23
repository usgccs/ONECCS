import HeroSection from "../../components/homepage/HeroSection";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import ExampleWrapper from "../../components/modal/SpringModal";
import HomeTOC from "../../components/homepage/HomeTOC";
import RevealBento from "../../components/homepage/RevealBento";
import DiscordSection from "../../components/homepage/DiscordSection";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <HeroSection/>
      <HomeTOC/>
      <RevealBento/>
      <DiscordSection/>
    </div>
  );
};

export default HomePage;
