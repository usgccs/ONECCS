import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Insights from "@/components/careerhub/Insights";
import BestCompanies from "@/components/careerhub/BestCompanies";
import JobSearch from "@/components/careerhub/JobSearch";
import TopTechComp from "@/components/careerhub/TopTechComp";
import Roles from "@/components/careerhub/Roles";
import InternshipOpportunities from "@/components/careerhub/InternshipOpportunities";
import PageHeader from "@/components/pageHeader/PageHeader";

const CareerHub = () => {
    return (
        <div>
            <PageHeader header={"Career Hub"} subheader1={"Internship Opportunities, Alumni Insights, and"} subheader2={"Valuable resources for your professional growth."} />
            <SectionHeader header={"Alumni Insights"}/>
            <Insights/>
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
        </div>
    );
}

export default CareerHub;