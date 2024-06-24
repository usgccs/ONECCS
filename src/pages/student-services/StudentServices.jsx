import EnlistmentSection from "../../components/studentServices/enlistment/EnlistmentSection";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import { useContentfulFlowcharts } from "../../hooks/useContentful";
import FlowchartSection from "../../components/flowchart/FlowchartSection"

const StudentServices = () => {

    const [flowcharts, setFlowcharts] = useState(null);
    const fetchFlowcharts119 = useContentfulFlowcharts(119);
    const fetchFlowcharts120 = useContentfulFlowcharts(120);
    const fetchFlowcharts121 = useContentfulFlowcharts(121);
    const fetchFlowcharts122 = useContentfulFlowcharts(122);
    const fetchFlowcharts123 = useContentfulFlowcharts(123);


    useEffect(() => {
    // Create an array of promises from the fetch operations
    const fetchPromises = [
        fetchFlowcharts119().then(result => result.items),
        fetchFlowcharts120().then(result => result.items),
        fetchFlowcharts121().then(result => result.items),
        fetchFlowcharts122().then(result => result.items),
        fetchFlowcharts123().then(result => result.items),
    ];

    Promise.all(fetchPromises)
        .then(results => {
            console.log("INSIDE");
            console.log(results);
            const combinedResults = results;
            setFlowcharts(combinedResults);
        })
        .catch(error => {
            console.error("Failed to fetch flowcharts:", error);
        });

}, []);


    return (
        <div className="flex flex-col items-center min-h-screen">
            <SectionHeader header={"Enlistments"} />
            <EnlistmentSection />
            <SectionHeader header={"Enrollment Schedule"} />
            {/* Carousel */}
            
            <SectionHeader header={"Flowcharts"} />
            {flowcharts ? (
                <FlowchartSection flowcharts={flowcharts} />
            ) : (
                <div>Loading flowcharts...</div>
            )}
        </div>
    );
}

export default StudentServices;