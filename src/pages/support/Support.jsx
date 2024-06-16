import SectionHeader from "../../components/sectionHeader/SectionHeader";
import SupportTOC from "../../components/support/SupportTOC"
import './Support'

const Support = () => {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <SectionHeader header={"Table of Contents"} />
            <SupportTOC/>
        </div>
    );
}

export default Support;