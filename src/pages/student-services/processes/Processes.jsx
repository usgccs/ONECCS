import SectionHeader from "@/components/sectionHeader/SectionHeader";
import LeaveOfAbsence from "../../../components/leaveOfAbsence/LeaveOfAbsence";
import ShiftingProcesses from "../../../components/shiftingProcesses/ShiftingProcesses";
import RequestForDocs from "../../../components/requestForDocs/RequestForDocs";
import AppToGraduate from "../../../components/appToGraduate/AppToGraduate"
import OnlineSDFO from "../../../components/onlineSDFO/OnlineSDFO"
import FileComplaint from "../../../components/fileComplaint/FileComplaint"
import AppCredit from "../../../components/appCredit/AppCredit"
import ExcusedAbsence from "../../../components/excusedAbsence/ExcusedAbsence"
import PageHeader from "../../../components/pageHeader/PageHeader";

const Processes = () => {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <PageHeader header={"Processes"} subheader1={"Learn the processes for requesting documents, shifting, LOA application, scholarships, and more."} />
            <SectionHeader header={"Excused Absence"} />
            <ExcusedAbsence />
            <SectionHeader header={"Leave of Absence"} />
            <LeaveOfAbsence />
            <SectionHeader header={"Shifting Processes"} />
            <ShiftingProcesses />
            <SectionHeader header={"Request for Documents"} />
            <RequestForDocs />
            <SectionHeader header={"Application to Graduate"} />
            <AppToGraduate />
            <SectionHeader header={"Online Submission of SDFO Documents"} />
            <OnlineSDFO />
            <SectionHeader header={"Filing and Processing of Complaints"} />
            <FileComplaint />
            <SectionHeader header={"Application Course Crediting"} />
            <AppCredit />
        </div>
    );
}

export default Processes;