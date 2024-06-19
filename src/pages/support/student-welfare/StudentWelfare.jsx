import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import './StudentWelfare'
import PahiramEquipment from "@/components/studentwelfare/PahiramEquipment";
import PahiramInitiative from "@/components/studentwelfare/PahiramInitiative";
import PahiramLocker from "@/components/studentwelfare/PahiramLocker";

const StudentWelfare = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <SectionHeader header={"Pahiram Initiatives"} />
            <PahiramInitiative/>
            <SectionHeader header={"Pahiram Locker"}/>
            <PahiramLocker/>
            <SectionHeader header={"Pahiram Equipment"}/>
            <PahiramEquipment/>
        </div>
    );
}

export default StudentWelfare;