import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import PageHeader from "../../../components/pageHeader/PageHeader";
import './StudentWelfare'

const StudentWelfare = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <PageHeader header={"Student Welfare"} subheader1={"Relief support, load assistance, supplies, and more."} />
            <SectionHeader header={"Table of Contents"} />
        </div>
    );
}

export default StudentWelfare;