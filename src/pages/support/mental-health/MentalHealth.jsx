import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import PageHeader from "../../../components/pageHeader/PageHeader";
import './MentalHealth'

const MentalHealth = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <PageHeader header={"Mental Health"} subheader1={"University and National Hotlines"} />
            <SectionHeader header={"Table of Contents"} />
        </div>
    );
}

export default MentalHealth;