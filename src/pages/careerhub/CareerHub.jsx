import SectionHeader from "@/components/sectionHeader/SectionHeader";
import BestCompanies from "@/components/careerhub/BestCompanies";
import JobSearch from "@/components/careerhub/JobSearch";
import TopTechComp from "@/components/careerhub/TopTechComp";
import Roles from "@/components/careerhub/Roles";
import InternshipOpportunities from "@/components/careerhub/InternshipOpportunities";
import Footer from "@/components/footer/Footer";

const CareerHub = () => {
    return (
        <div>
            <h1>CareerHub Header</h1>
            <SectionHeader header={"Alumni Insights"}/>
            <h1>alumni insigns</h1>
            <SectionHeader header={"Internship Opportunities"}/>
            <InternshipOpportunities/>
            <SectionHeader header={"Best Companies to Work for"}/>
            <BestCompanies/>
            <SectionHeader header={"Top Technology Companies in the Philippines"}/>
            <TopTechComp/>
            <SectionHeader header={"Roles in the Technology Industry"}/>
            <Roles/>
            <SectionHeader header={"Job Search Tools"}/>
            <JobSearch/>
            <Footer/>
        </div>
    );
}

export default CareerHub;