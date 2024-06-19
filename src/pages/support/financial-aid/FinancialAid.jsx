import SectionHeader from "@/components/sectionHeader/SectionHeader";
import InitiativeItem from "@/components/financialAid/initiatives/InitiativesItem";
import InitiativesSection from "@/components/financialAid/initiatives/InitiativesSection";
import TuitionFeePayment from "@/components/financialAid/tuitionFeePayment/TuitionFeePayment";
import ScholarshipSection from "@/components/financialAid/initiatives/scholarship/ScholarshipSection";
import './FinancialAid'

const FinancialAid = () => {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <SectionHeader header={"Tuition Fee Payment Assistance"} />
            <TuitionFeePayment/>
            <SectionHeader header={"Scholarship"}/>
            <ScholarshipSection/>
            <SectionHeader header={"USG Office of the Executive Treasurer Initiatives"} />
            <InitiativesSection/>
            
        </div>
    );
}

export default FinancialAid;