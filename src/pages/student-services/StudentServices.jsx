import EnlistmentSection from "../../components/studentServices/enlistment/EnlistmentSection";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const StudentServices = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <SectionHeader header={"Enlistments"} />
            <EnlistmentSection />
            
            <SectionHeader header={"Flowcharts"} />
        </div>
    );
}

export default StudentServices;