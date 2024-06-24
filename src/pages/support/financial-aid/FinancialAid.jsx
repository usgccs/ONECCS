import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import PageHeader from "../../../components/pageHeader/PageHeader";
import './FinancialAid'

const FinancialAid = () => {


    return (
        <div className="flex flex-col items-center min-h-screen">
            <PageHeader header={"Financial Aid"} subheader1={"Scholarships and Financial grants"} />
            <SectionHeader header={"Table of Contents"} />
        </div>
    );
}

export default FinancialAid;