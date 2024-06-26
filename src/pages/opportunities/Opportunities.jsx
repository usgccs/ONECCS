import SectionHeader from "@/components/sectionHeader/SectionHeader";
import UnivSpecialAwards from "@/components/oppotunities/UnivSpecialAwards";
import GraduationAwards from "@/components/oppotunities/GraduationAwards";
import CareerSupport from "@/components/oppotunities/CareerSupport";
import PageHeader from "@/components/pageHeader/PageHeader";

const Opportunities = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <PageHeader header={"Opportunities"} subheader1={"Find different opportunities here."} subheader2={"Dean's Lister, Latin Honors, Graduation Awards and Career Support."} />
            <SectionHeader header={"Graduation Awards"} />
            <GraduationAwards/>
            <SectionHeader header={"University Special Awards"} />
            <UnivSpecialAwards />
            <SectionHeader header={"DLSU Career Support"} />
            <CareerSupport/>
            
        </div>
    );
    }

export default Opportunities;