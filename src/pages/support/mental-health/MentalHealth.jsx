import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import './MentalHealth'
import Hotlines from "@/components/mentalHealth/Hotlines";

const MentalHealth = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <SectionHeader header={"Table of Contents"} />

            <SectionHeader header={"National Mental Health Crisis Hotline "} />
            <Hotlines/>
        </div>
    );
}

export default MentalHealth;