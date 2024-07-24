import HeroSection from "../../components/homepage/HeroSection";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import ExampleWrapper from "../../components/modal/SpringModal";
import HomeTOC from "../../components/homepage/HomeTOC";
import RevealBento from "../../components/homepage/RevealBento";
import DiscordSection from "../../components/homepage/DiscordSection";
import ScrollingSection from "../../components/homepage/ScrollingSection";

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <HomeTOC/>
      <RevealBento/>
      <DiscordSection/>
      </>
  );
};

export default HomePage;
