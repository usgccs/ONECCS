import SectionHeader from "../../components/sectionHeader/SectionHeader";
import SupportTOC from "../../components/support/SupportTOC"
import './Support'
import Footer from "@/components/footer/Footer";

const Support = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <SectionHeader header={"Table of Contents"} />
            <SupportTOC/>
            <Footer/>
        </div>
    );
}

export default Support;