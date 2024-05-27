import SectionHeader from "@/components/sectionHeader/SectionHeader";
import LeaveOfAbsence from "../../../components/leaveOfAbsence/LeaveOfAbsence";

const Processes = () => {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <SectionHeader header={"Leave of Absence"} />
            <LeaveOfAbsence />
        </div>
    );
}

export default Processes;