import EnlistmentSection from "../../components/studentServices/enlistment/EnlistmentSection";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const StudentServices = () => {

    return (
        <div className="flex flex-col items-center min-h-screen sm:px-12 px-8 border border-red">
            <SectionHeader header={"Enlistments"} />
            <EnlistmentSection />
            <SectionHeader header={"Enrollment Schedule"} />
            {/* Carousel */}
            
            <SectionHeader header={"Flowcharts"} />
        </div>
    );
}

export default StudentServices;