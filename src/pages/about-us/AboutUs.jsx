import OneccsSection from "../../components/about-us/OneccsSection";
import OneccsOrganizationSection from "../../components/about-us/OneccsOrganizationSection";
import { useState, useEffect } from "react";
import { useContentfulOrgAbout, useContentfulContentType } from "../../hooks/useContentful";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import UsgSection from "../../components/about-us/UsgSection";


const AboutUs = () => {

    const [organizations, setOrganizations] = useState(null);
    const [usgOrgs, setusgOrgs] = useState(null);

const fetchOrganizations = useContentfulOrgAbout();


const fetchUSGorgs = useContentfulContentType("usgOrganizations");

useEffect(() => {
    fetchOrganizations().then((entries) => {
        setOrganizations(entries.items);
    });
}, [fetchOrganizations]);

useEffect(() => {
    fetchUSGorgs().then((entries) => {
        setusgOrgs(entries.items);
    });
}, [fetchUSGorgs]);





    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <OneccsSection/>

            {usgOrgs?.length && (
                <div>
                    <UsgSection usgOrgs={usgOrgs} />
                </div>
            )}
            
            {organizations?.length && (
                <div>
                    <SectionHeader header={"Student Organizations"} />
                    <OneccsOrganizationSection organizations={organizations} />
                </div>
            )}



        </div>
    );
}

export default AboutUs;