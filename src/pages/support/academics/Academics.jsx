import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import './Academics'
import TutorRequestSection from "../../../components/academics/tutorrequest/TutorRequestSection";
import AdditionalResourcesSection from "../../../components//academics/additionalresources/AdditionalResourcesSection";

const Academics = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <SectionHeader header={"Tutor Request"} />
            <TutorRequestSection/>
            <SectionHeader header={"Additional Resources"} />
            <AdditionalResourcesSection/>
        </div>
    );
}

export default Academics;