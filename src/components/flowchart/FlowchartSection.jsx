import { useState, useEffect } from 'react';
import {
    useContentfulFlowcharts
} from "../../hooks/useContentful";


function FlowchartList(prop) {

    const flowchartList = prop.flowchartList;

    useEffect(() => {
        console.log("PROP");
        console.log(flowchartList);
    })

    return (
        <div className="px-4 collapse collapse-plus join-item bg-[#23453d]  lg:basis-5/12">
            <input type="checkbox" name="flowcharts" />
            <div className="text-xl font-medium text-white collapse-title">ID {flowchartList[0].fields.idNum}</div>
            <div className="flex flex-wrap justify-center gap-4 collapse-content">
            {flowchartList.map((fci, index) => {
                    return <a className='w-2/5 w-full p-1 font-medium leading-normal text-center text-black bg-white rounded md:basis-1/5 text-nowrap'
                        key={index} href={fci.fields.url} target='_blank'>
                        {fci.fields.degCode}
                    </a>
                })}
                
            </div>
        </div>
    )
}

function FlowchartSection({flowcharts}) {
    // TODO: Find a way to host the entire object below on Contentful

    return (
    <>
        <div className="p-4 lg:p-6 text-center">
            <h1 className="font-black text-4xl xl:text-5xl p-2">Flowcharts</h1>
            <p>Access with your DLSU Email<br></br>Do not request access with non-DLSU email accounts</p>
        </div>
        <div className="flex flex-col flex-wrap px-10 pt-1 pb-10 items-start justify-center w-full gap-4 lg:p-0 lg:pb-12 sm:flex-row">
            {flowcharts.map((fcl, index) => { return <FlowchartList key={index} flowchartList={fcl} isDefault={index == 0} /> })}
        </div>
    </>
    )
}

export default FlowchartSection;
