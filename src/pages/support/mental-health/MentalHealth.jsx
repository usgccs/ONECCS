import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import PageHeader from "../../../components/pageHeader/PageHeader";
import './MentalHealth'
import Hotlines from "@/components/mentalHealth/Hotlines";
import Contacts from "@/components/mentalHealth/Contacts";

const MentalHealth = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <PageHeader header={"Mental Health"} subheader1={"University and National Hotlines"} />
            <SectionHeader header={"Mental Health Contacts"} />
            <Contacts />
            <SectionHeader header={"National Mental Health Crisis Hotline "} />
            <Hotlines/>
        </div>
    );
}

export default MentalHealth;