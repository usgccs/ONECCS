import SectionHeader from "../../components/sectionHeader/SectionHeader";
import SupportTOC from "../../components/support/SupportTOC"
import PageHeader from "../../components/pageHeader/PageHeader";
import './Support'
import Footer from "@/components/footer/Footer";

const Support = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <PageHeader header={"Support"} subheader1={"Find student support here."} subheader2={"Academic, Mental Health, Financial Aid, and Student Welfare."} />
            <SectionHeader header={"Table of Contents"} />
            <SupportTOC/>
            <Footer/>
        </div>
    );
}

export default Support;