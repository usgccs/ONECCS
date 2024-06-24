import SectionHeader from "@/components/sectionHeader/SectionHeader";
import UnivSpecialAwards from "@/components/oppotunities/UnivSpecialAwards";
import GraduationAwards from "@/components/oppotunities/GraduationAwards";
import CareerSupport from "@/components/oppotunities/CareerSupport";

const Opportunities = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            opportunities header
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