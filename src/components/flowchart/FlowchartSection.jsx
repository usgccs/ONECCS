import { useState, useEffect } from 'react';
import {
    useContentfulFlowcharts
} from "../../hooks/useContentful";


function FlowchartList(prop) {
    let flowchartObj = prop.flowchartList;

    return (
        <div className="px-4 collapse collapse-plus join-item bg-[#23453d] lg:basis-5/12">
            <input type="checkbox" name="flowcharts" />
            <div className="text-xl font-medium text-white collapse-title">ID {flowchartObj.idNum}</div>
            <div className="flex flex-wrap justify-center gap-4 collapse-content">
                {flowchartObj.flowcharts.map((fci, index) => {
                    return <a className='w-2/5 w-full p-1 font-medium leading-normal text-center text-black bg-white rounded md:basis-1/5 text-nowrap'
                        key={index} href={fci.url} target='_blank'>
                        {fci.degCode}
                    </a>
                })}
            </div>
        </div>
    )
}

function FlowchartSection() {
    // TODO: Find a way to host the entire object below on Contentful
    const fetchFlowcharts = useContentfulFlowcharts();

    const [flowchartsList, setFlowchart] = useState(null);

    useEffect(() => {
        fetchFlowcharts().then((entries) => {
            setFlowchart(entries.items[0].fields.objFlowchart);
        });
    }, []);

    console.log(flowchartsList)

    return (<>
        <div className="p-10 text-center">
            <h1 className="font-black">Flowcharts</h1>
            <p>Access with your DLSU Email<br></br>Do not request access with non-DLSU email accounts</p>
        </div>
        <div className="flex flex-col flex-wrap items-start justify-center w-full gap-4 sm:flex-row">
            {flowchartsList.map((fcl, index) => { return <FlowchartList key={index} flowchartList={fcl} isDefault={index == 0} /> })}
        </div>
    </>
    )
}

export default FlowchartSection;