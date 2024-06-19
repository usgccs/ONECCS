import OneccsSection from "../../components/about-us/OneccsSection";
import OneccsOrganizationSection from "../../components/about-us/OneccsOrganizationSection";
import { useState, useEffect } from "react";
import { useContentfulOrgAbout } from "../../hooks/useContentful";
import SectionHeader from "../../components/sectionHeader/SectionHeader";


const AboutUs = () => {

    const [organizations, setOrganizations] = useState(null);

const fetchOrganizations = useContentfulOrgAbout();

useEffect(() => {
    fetchOrganizations().then((entries) => {
        setOrganizations(entries.items);
    });
}, [fetchOrganizations]);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <OneccsSection/>
            

            {organizations?.length && (
                <div>
                    <SectionHeader header={"Student Organizations"} />
                    <OneccsOrganizationSection organizations={organizations} />
                    <div className="w-full bg-gray-500"></div>
                </div>
            )}



        </div>
    );
}

export default AboutUs;