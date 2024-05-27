import SectionHeader from "@/components/sectionHeader/SectionHeader";
import LeaveOfAbsence from "../../../components/leaveOfAbsence/LeaveOfAbsence";
import ShiftingProcesses from "../../../components/shiftingProcesses/ShiftingProcesses";

const Processes = () => {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <SectionHeader header={"Leave of Absence"} />
            <LeaveOfAbsence />
            <SectionHeader header={"Shifting Processes"} />
            <ShiftingProcesses />
        </div>
    );
}

export default Processes;