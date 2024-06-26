import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import './Academics'
import TutorRequestSection from "../../../components/academics/tutorrequest/TutorRequestSection";
import AdditionalResourcesSection from "../../../components//academics/additionalresources/AdditionalResourcesSection";
import PageHeader from "../../../components/pageHeader/PageHeader";

const Academics = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <PageHeader header={"Academics"} subheader1={"Tutor Requests, Group Study Sessions, Resources"} />
            <SectionHeader header={"Tutor Request"} />
            <TutorRequestSection/>
            <SectionHeader header={"Additional Resources"} />
            <AdditionalResourcesSection/>
        </div>
    );
}

export default Academics;