import SectionHeader from "@/components/sectionHeader/SectionHeader";
import LeaveOfAbsence from "../../../components/leaveOfAbsence/LeaveOfAbsence";
import ShiftingProcesses from "../../../components/shiftingProcesses/ShiftingProcesses";
import RequestForDocs from "../../../components/requestForDocs/RequestForDocs";

const Processes = () => {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <SectionHeader header={"Leave of Absence"} />
            <LeaveOfAbsence />
            <SectionHeader header={"Shifting Processes"} />
            <ShiftingProcesses />
            <SectionHeader header={"Request for Documents"} />
            <RequestForDocs />
        </div>
    );
}

export default Processes;