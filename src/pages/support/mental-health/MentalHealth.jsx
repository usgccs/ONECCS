import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import './MentalHealth'
import Hotlines from "@/components/mentalHealth/Hotlines";
import Contacts from "@/components/mentalHealth/Contacts";
import Footer from "@/components/footer/Footer";

const MentalHealth = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <SectionHeader header={"Mental Health Contacts"} />
            <Contacts />
            <SectionHeader header={"National Mental Health Crisis Hotline "} />
            <Hotlines/>
            <Footer/>
        </div>
    );
}

export default MentalHealth;